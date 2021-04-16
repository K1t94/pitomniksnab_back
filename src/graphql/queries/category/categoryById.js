import Category from '../../../orm/entity/Category';
import GetOneItemByIdInput from '../../inputs/item/GetOneItemByIdInput';
import CategoryType from '../../types/CategoryType';

export default {
  type: CategoryType,
  args: {
    input: {
      type: GetOneItemByIdInput,
    },
  },
  resolve: async (root, { input: { id } }, { entityManager }) => entityManager.findOne(Category, id),
};
