import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt, GraphQLList,
} from 'graphql';
import Item from '../../orm/entity/Item';
import { ORDER } from '../enums/ItemSortEnumType';
import { DESC } from '../enums/SortDirectionEnumType';
import ItemsQueryInput from '../inputs/item/ItemsQueryInput';
import ItemType from './ItemType';


export default new GraphQLObjectType({
  name: 'Category',
  description: 'Категория товара',
  fields() {
    return {
      id: {
        type: GraphQLID,
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      order: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      active: {
        type: new GraphQLNonNull(GraphQLBoolean),
      },
      items: {
        type: new GraphQLList(new GraphQLNonNull(ItemType)),
        args: {
          input: {
            type: ItemsQueryInput,
          },
        },
        resolve: async (category, { input = {} }, { entityManager }) => {
          let order = {
            order: {
              [ORDER]: DESC,
            },
          };

          let where = {
            where: {
              category: category.id,
            },
          };

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
                category: category.id,
                active: value,
              },
            };
          }

          return entityManager.find(Item, {
            ...where,
            ...order,
          });
        },
      },
    };
  },
});
