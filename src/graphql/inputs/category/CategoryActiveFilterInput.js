import {
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CategoryActiveFilterInput',
  fields: () => ({
    value: {
      type: GraphQLBoolean,
    },
  }),
});
