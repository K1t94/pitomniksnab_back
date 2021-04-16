import { ForbiddenError } from 'apollo-server-express';
import Category from '../../../orm/entity/Category';
import EditCategoryInput from '../../inputs/category/EditCategoryInput';
import CategoryType from '../../types/CategoryType';

export default {
  type: CategoryType,
  args: {
    input: {
      type: EditCategoryInput,
    },
  },
  resolve: async (source, args, { entityManager, identity, acl }) => {
    const canViewOwn = await acl.can('granted', 'adminRouteAccess');
    if (!canViewOwn) {
      throw new ForbiddenError('Access denied');
    }

    const category = await entityManager.findOne(Category, args.input.id);
    const { name, active, order } = args.input;

    category.name = name;
    category.active = active;
    category.order = order;

    return await entityManager.save(category);
  },
};
