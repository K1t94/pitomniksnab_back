import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLNullableType,
  GraphQLInputObjectType,
} from 'graphql';


export default new GraphQLInputObjectType({
  name: 'ToSendMessageToTelegram',
  fields() {
    return {
      phone: {
        type: new GraphQLNonNull(GraphQLString),
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      city: {
        type: new GraphQLNonNull(GraphQLString),
      },
      comment: {
        type: new GraphQLNonNull(GraphQLString),
      },
      shippingProducts: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
