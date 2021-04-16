import { GraphQLNonNull } from 'graphql';
import Content from '../../../orm/entity/Content';
import ContentType from '../../types/ContentType';

export default {
  type: new GraphQLNonNull(ContentType),
  resolve: async (root, args, { entityManager }) => entityManager.findOne(Content, 1),
};
