import {
  GraphQLInputObjectType,
} from 'graphql';
import ItemsActiveFilterInput from './ItemsActiveFilterInput';
import ItemsSortInput from './ItemsSortInput';

export default new GraphQLInputObjectType({
  name: 'ItemsQueryInput',
  fields: () => ({
    sort: {
      type: ItemsSortInput,
    },
    activeFilter: {
      type: ItemsActiveFilterInput,
    },
  }),
});
