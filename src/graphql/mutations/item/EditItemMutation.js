import { ForbiddenError } from 'apollo-server-express';
import uuid from 'uuid/v4';
import fs from 'fs';
import { createWriteStream, unlink } from 'fs';
import Category from '../../../orm/entity/Category';
import Identity from '../../../orm/entity/Identity';
import Item from '../../../orm/entity/Item';
import putObject from '../../../s3/putObject';
import EditItemInput from '../../inputs/item/EditItemInput';
import ItemType from '../../types/ItemType';

export default {
  type: ItemType,
  args: {
    input: {
      type: EditItemInput,
    },
  },
  resolve: async (source, args, { entityManager, identity, acl }) => {
    const canViewOwn = await acl.can('granted', 'adminRouteAccess');
    if (!canViewOwn) {
      throw new ForbiddenError('Access denied');
    }

    const item = await entityManager.findOne(Item, args.input.id);

    const { file, name, description, active, order, price } = args.input;

    if (file) {
      const { createReadStream, filename, mimetype } = await file.rawFile;

      const appDirectory = fs.realpathSync(process.cwd());
      const UPLOAD_DIR = `${appDirectory}/tmp`;
      const id = uuid();
      const stream = createReadStream();
      const newFilename = `${id}-${filename}`;
      const path = `${UPLOAD_DIR}/${newFilename}`;

      // Делаем локальную копию файла.
      await new Promise((resolve, reject) => {
        stream
          .on('error', (error) => {
            console.error(error);
            // Удаляем временный файл
            unlink(path, () => {
              reject(error);
            });
          })
          .pipe(createWriteStream(path))
          .on('error', reject)
          .on('finish', () => {
            console.log(`upload tmp file ${path} success`);

            return resolve();
          });
      });

      const userId = identity.id;
      const currentIdentity = await entityManager.findOne(Identity, userId);
      const body = createReadStream(path);

      const bucket = process.env.BUCKET_MAIN;
      const fileKey = `avatars/avatar-${userId}-${newFilename}`;

      const data = await putObject({
        body,
        bucket,
        fileKey,
        ACL: 'public-read',
        ContentType: mimetype,
      });

      const imageURL = `${process.env.PUBLIC_FILE_PREFIX}/${fileKey}`;

      if (!data.ETag) {
        console.error('Ошибка при загрузке файла.');
        return currentIdentity;
      }

      // Удаляем временный файл
      unlink(path, () => {
        console.log(`Файл ${path} - удален`);
      });

      item.imageURL = imageURL;
    }

    const currentCategory = await item.category;

    if (args.input.categoryId !== currentCategory.id) {
      const category = await entityManager.findOne(Category, args.input.categoryId);

      if (!category) {
        throw new Error('Категория не найдена');
      }

      item.category = category;
    }

    item.name = name;
    item.description = description;
    item.active = active;
    item.order = order;
    item.price = price;

    return await entityManager.save(item);
  },
};
