import { ForbiddenError } from 'apollo-server-express';
import Category from '../../../orm/entity/Category';
import CreateCategoryInput from '../../inputs/category/CreateCategoryInput';
import CategoryType from '../../types/CategoryType';

export default {
  type: CategoryType,
  args: {
    input: {
      type: CreateCategoryInput,
    },
  },
  resolve: async (source, args, { entityManager, identity, acl }) => {
    const canViewOwn = await acl.can('granted', 'adminRouteAccess');
    if (!canViewOwn) {
      throw new ForbiddenError('Access denied');
    }

    const { name, active, order } = args.input;

    const newCategory = new Category();
    newCategory.name = name;
    newCategory.active = active;
    newCategory.order = order;

    return await entityManager.save(newCategory);
  },
};
