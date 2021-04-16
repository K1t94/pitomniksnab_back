import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'EditCategoryInput',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    active: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    order: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});
