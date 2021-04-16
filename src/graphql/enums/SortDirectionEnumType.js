import {
  GraphQLEnumType,
} from 'graphql';

export const ASC = 'ASC';
export const DESC = 'DESC';

const SortDirectionEnumType = new GraphQLEnumType({
  name: 'FilterEnumType',
  values: {
    [ASC]: {
      value: ASC,
    },
    [DESC]: {
      value: DESC,
    },
  },
});

export default SortDirectionEnumType;
