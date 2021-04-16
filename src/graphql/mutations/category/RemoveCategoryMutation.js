import { ForbiddenError } from 'apollo-server-express';
import { GraphQLBoolean } from 'graphql';
import Category from '../../../orm/entity/Category';
import RemoveCategoryInput from '../../inputs/category/RemoveCategoryInput';

export default {
  type: GraphQLBoolean,
  args: {
    input: {
      type: RemoveCategoryInput,
    },
  },
  resolve: async (source, args, { entityManager, acl }) => {
    const canViewOwn = await acl.can('granted', 'adminRouteAccess');
    if (!canViewOwn) {
      throw new ForbiddenError('Access denied');
    }

    const category = await entityManager.findOne(Category, args.input.id);

    const items = await category.items;

    if (items.length) {
      throw new Error('Категорию можно удалить только если в ней нет товаров.');
    }

    await entityManager.remove(category);

    return true;
  },
};
