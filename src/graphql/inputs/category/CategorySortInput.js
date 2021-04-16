import {
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import CategorySortEnumType from '../../enums/CategorySortEnumType';
import SortDirectionEnumType from '../../enums/SortDirectionEnumType';

export default new GraphQLInputObjectType({
  name: 'CategorySortInput',
  fields: () => ({
    field: {
      type: new GraphQLNonNull(CategorySortEnumType),
    },
    direction: {
      type: new GraphQLNonNull(SortDirectionEnumType),
    },
  }),
});
