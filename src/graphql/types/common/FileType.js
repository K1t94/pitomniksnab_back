import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'File',
  fields() {
    return {
      filename: {
        type: new GraphQLNonNull(GraphQLString),
      },
      mimetype: {
        type: new GraphQLNonNull(GraphQLString),
      },
      encoding: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
