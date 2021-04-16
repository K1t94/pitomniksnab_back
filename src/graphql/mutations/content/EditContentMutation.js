import { ForbiddenError } from 'apollo-server-express';
import Category from '../../../orm/entity/Category';
import Content from '../../../orm/entity/Content';
import EditContentInput from '../../inputs/content/EditContentInput';
import ContentType from '../../types/ContentType';

export default {
  type: ContentType,
  args: {
    input: {
      type: EditContentInput,
    },
  },
  resolve: async (source, args, { entityManager, identity, acl }) => {
    const canViewOwn = await acl.can('granted', 'adminRouteAccess');
    if (!canViewOwn) {
      throw new ForbiddenError('Access denied');
    }

    const content = await entityManager.findOne(Content, 1);
    const {
      phone, email, howToBuy, mainHeader, mainText, companyInfo,
    } = args.input;

    content.phone = phone.trim();
    content.email = email.trim();
    content.howToBuy = howToBuy.trim();
    content.mainHeader = mainHeader.trim();
    content.mainText = mainText.trim();
    content.companyInfo = companyInfo.trim();

    return entityManager.save(content);
  },
};
