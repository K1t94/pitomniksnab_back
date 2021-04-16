import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'Content',
  description: 'Остальной контент',
  fields() {
    return {
      phone: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      howToBuy: {
        type: new GraphQLNonNull(GraphQLString),
      },
      mainHeader: {
        type: new GraphQLNonNull(GraphQLString),
      },
      mainText: {
        type: new GraphQLNonNull(GraphQLString),
      },
      companyInfo: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
