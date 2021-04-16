import Item from '../../../orm/entity/Item';
import GetOneItemByIdInput from '../../inputs/item/GetOneItemByIdInput';
import ItemType from '../../types/ItemType';

export default {
  type: ItemType,
  args: {
    input: {
      type: GetOneItemByIdInput,
    },
  },
  resolve: async (root, { input: { id } }, { entityManager }) => entityManager.findOne(Item, id),
};
