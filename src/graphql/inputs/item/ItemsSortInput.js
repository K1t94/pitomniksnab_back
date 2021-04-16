import {
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import ItemSortEnumType from '../../enums/ItemSortEnumType';
import SortDirectionEnumType from '../../enums/SortDirectionEnumType';

export default new GraphQLInputObjectType({
  name: 'ItemsSortInput',
  fields: () => ({
    field: {
      type: new GraphQLNonNull(ItemSortEnumType),
    },
    direction: {
      type: new GraphQLNonNull(SortDirectionEnumType),
    },
  }),
});
