import {
  GraphQLInputObjectType,
} from 'graphql';
import CategoryActiveFilterInput from './CategoryActiveFilterInput';
import CategorySortInput from './CategorySortInput';

export default new GraphQLInputObjectType({
  name: 'CategoryQueryInput',
  fields: () => ({
    sort: {
      type: CategorySortInput,
    },
    activeFilter: {
      type: CategoryActiveFilterInput,
    },
  }),
});
