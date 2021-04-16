import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'RemoveItemInput',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});
