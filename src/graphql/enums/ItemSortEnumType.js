import {
  GraphQLEnumType,
} from 'graphql';

export const ID = 'id';
export const NAME = 'name';
export const DESCRIPTION = 'description';
export const ACTIVE = 'active';
export const ORDER = 'order';
export const CATEGORY = 'category';

const ItemSortEnumType = new GraphQLEnumType({
  name: 'ItemSortEnumType',
  values: {
    [ID]: {
      value: ID,
    },
    [NAME]: {
      value: NAME,
    },
    [ORDER]: {
      value: ORDER,
    },
    [DESCRIPTION]: {
      value: DESCRIPTION,
    },
    [ACTIVE]: {
      value: ACTIVE,
    },
  },
});

export default ItemSortEnumType;
