import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CreateCategoryInput',
  fields: () => ({
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
