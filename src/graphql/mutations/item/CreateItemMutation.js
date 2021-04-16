import { ForbiddenError } from 'apollo-server-express';
import uuid from 'uuid/v4';
import fs from 'fs';
import { createWriteStream, unlink } from 'fs';
import Category from '../../../orm/entity/Category';
import Identity from '../../../orm/entity/Identity';
import Item from '../../../orm/entity/Item';
import putObject from '../../../s3/putObject';
import CreateItemInput from '../../inputs/item/CreateItemInput';
import ItemType from '../../types/ItemType';

export default {
  type: ItemType,
  args: {
    input: {
      type: CreateItemInput,
    },
  },
  resolve: async (source, args, { entityManager, identity, acl }) => {
    const canViewOwn = await acl.can('granted', 'adminRouteAccess');
    if (!canViewOwn) {
      throw new ForbiddenError('Access denied');
    }

    const { file, name, description, active, order, price } = args.input;

    const { createReadStream, filename, mimetype } = await file.rawFile;
    const stream = createReadStream();

    const appDirectory = fs.realpathSync(process.cwd());
    const UPLOAD_DIR = `${appDirectory}/tmp`;
    const id = uuid();

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

    const body = createReadStream(path);

    const bucket = process.env.BUCKET_MAIN;
    const fileKey = `items/item-${newFilename}`;

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
      return null;
    }

    // Удаляем временный файл
    unlink(path, () => {
      console.log(`Файл ${path} - удален`);
    });

    const category = await entityManager.findOne(Category, args.input.categoryId);

    if (!category) {
      throw new Error('Категория не найдена');
    }

    const newItem = new Item();
    newItem.imageURL = imageURL;
    newItem.name = name;
    newItem.description = description;
    newItem.active = active;
    newItem.category = category;
    newItem.order = order;
    newItem.price = price;

    return await entityManager.save(newItem);
  },
};
