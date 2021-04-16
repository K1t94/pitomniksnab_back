import isArray from 'lodash/isArray';
import { ForbiddenError, ValidationError } from 'apollo-server-express';
import request from 'request';
import { GraphQLBoolean } from 'graphql';

import ShippingOrderInput from '../../inputs/telegram/ShippingOrderInput';
import Item from '../../../orm/entity/Item.ts';


export default {
  type: GraphQLBoolean,
  args: {
    data: {
      type: ShippingOrderInput,
    },
  },
  resolve: async (_, args, { entityManager }) => {
    const {
      phone,
      email,
      name,
      shippingProducts: products,
      city,
      comment,
    } = args.data;

    const shippingProducts = JSON.parse(products);

    if (!isArray(shippingProducts)) {
      throw new ValidationError('shippingProducts должен быть массивом с выбранными товарами в JSON формате');
    }

    const productPromises = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const { productId } of shippingProducts || []) {
      productPromises.push(
        entityManager.findOne(Item, productId),
      );
    }

    // eslint-disable-next-line no-restricted-syntax
    for await (const product of productPromises) {
      const idx = shippingProducts.findIndex(
        ({ productId }) => productId === product.id,
      );

      if (idx !== -1) {
        Object.assign(
          shippingProducts[idx],
          { name: product.name },
        );
      }
    }

    const items = shippingProducts.reduce(
      (acc, product) => {
        acc.push(`<b>Название</b>: ${product.name}`);
        acc.push(`<b>Количество</b>: ${product.quantity}`);
        acc.push('');

        return acc;
      },
      [],
    );

    const getComment = () => {
      if (comment !== 'Null') {
        return `<b>Комментарий</b>: ${comment}`;
      }

      return '';
    };

    const fields = [
      `<b>Имя клиента</b>: ${name}`,
      `<b>Телефон</b>: ${phone}`,
      `<b>Email</b>: ${email}`,
      `<b>Город</b>: ${city}`,
      getComment(),
      '',
      '<b>Заказал</b>:',
      '',
    ];

    items.push('--------------------------------------');

    let msg = '';
    fields
      .concat(items)
      .forEach((field) => {
        msg += `${field}\n`;
      });

    request.post(
      `${process.env.TELEGRAM_API_FOR_SEND_ORDER}${encodeURI(msg)}`,
      // eslint-disable-next-line consistent-return
      (error, response) => {
        if (!response || response.statusCode !== 200) {
          throw new ForbiddenError('Произошла ошибка');
        }

        if (response.statusCode === 200) {
          return true;
        }
      },
    );
  },
};
