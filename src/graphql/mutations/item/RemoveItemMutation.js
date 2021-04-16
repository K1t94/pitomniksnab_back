import { ForbiddenError } from 'apollo-server-express';
import { GraphQLBoolean } from 'graphql';
import Item from '../../../orm/entity/Item';
import RemoveItemInput from '../../inputs/item/RemoveItemInput';

export default {
  type: GraphQLBoolean,
  args: {
    input: {
      type: RemoveItemInput,
    },
  },
  resolve: async (source, args, { entityManager, acl }) => {
    const canViewOwn = await acl.can('granted', 'adminRouteAccess');
    if (!canViewOwn) {
      throw new ForbiddenError('Access denied');
    }

    const item = await entityManager.findOne(Item, args.input.id);

    await entityManager.remove(item);

    return true;
  },
};
