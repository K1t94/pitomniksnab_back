import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID, GraphQLInt,
} from 'graphql';
import { GraphQLUpload } from 'graphql-upload';

export default new GraphQLInputObjectType({
  name: 'CreateItemInput',
  fields: () => ({
    categoryId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    file: {
      type: new GraphQLNonNull(GraphQLUpload),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
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
