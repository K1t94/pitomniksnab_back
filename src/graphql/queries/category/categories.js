import { GraphQLList, GraphQLNonNull } from 'graphql';
import Category from '../../../orm/entity/Category';
import { ORDER } from '../../enums/CategorySortEnumType';
import { DESC } from '../../enums/SortDirectionEnumType';
import CategoryQueryInput from '../../inputs/category/CategoryQueryInput';
import CategoryType from '../../types/CategoryType';

export default {
  type: new GraphQLList(new GraphQLNonNull(CategoryType)),
  args: {
    input: {
      type: CategoryQueryInput,
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

    return entityManager.find(Category, {
      ...where,
      ...order,
    });
  },
};
