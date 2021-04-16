import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'TelegramRes',
  description: 'Отправка заказа в телеграм',
  fields() {
    return {
      result: {
        type: new GraphQLNonNull(GraphQLBoolean),
      },
    };
  },
});
