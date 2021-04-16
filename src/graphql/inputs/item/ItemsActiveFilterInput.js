import {
  GraphQLInputObjectType,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ItemsActiveFilterInput',
  fields: () => ({
    value: {
      type: GraphQLBoolean,
    },
  }),
});
