import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'EditContentInput',
  fields: () => ({
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
  }),
});
