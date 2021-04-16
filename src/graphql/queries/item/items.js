import { GraphQLList, GraphQLNonNull } from 'graphql';
import Item from '../../../orm/entity/Item';
import { ORDER } from '../../enums/ItemSortEnumType';
import { DESC } from '../../enums/SortDirectionEnumType';
import ItemsQueryInput from '../../inputs/item/ItemsQueryInput';
import ItemType from '../../types/ItemType';

export default {
  type: new GraphQLList(new GraphQLNonNull(ItemType)),
  args: {
    input: {
      type: ItemsQueryInput,
    },
  },
  resolve: async (root, { input = {} }, { entityManager }) => {
    let order = {
      order: {
        [ORDER]: DESC,
      },
    };

    let where = {};

    const { sort, activeFilter = {} } = input;

    const { value = null } = activeFilter;

    if (sort) {
      order = {
        order: {
          [sort.field]: sort.direction,
        },
      };
    }

    if (value !== null) {
      where = {
        where: {
          active: value,
        },
      };
    }

    return entityManager.find(Item, {
      ...where,
      ...order,
    });
  },
};
