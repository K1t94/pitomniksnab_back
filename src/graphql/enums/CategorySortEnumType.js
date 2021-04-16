import {
  GraphQLEnumType,
} from 'graphql';

export const ID = 'id';
export const NAME = 'name';
export const ORDER = 'order';
export const ACTIVE = 'active';

const CategorySortEnumType = new GraphQLEnumType({
  name: 'CategorySortEnumType',
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
    [ACTIVE]: {
      value: ACTIVE,
    },
  },
});

export default CategorySortEnumType;
