import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} from 'graphql';
import CategoryType from './CategoryType';

export default new GraphQLObjectType({
  name: 'Item',
  description: 'Единичный товар',
  fields() {
    return {
      id: {
        type: GraphQLID,
      },
      imageURL: {
        type: new GraphQLNonNull(GraphQLString),
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
      category: {
        type: new GraphQLNonNull(CategoryType),
      },
    };
  },
});
