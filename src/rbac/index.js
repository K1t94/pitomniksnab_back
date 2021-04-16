import { RBAC } from 'rbac';
import { ADMIN_ROLE_NAME, GUEST_ROLE_NAME } from './constans';

export default new RBAC({
  roles: [ADMIN_ROLE_NAME, GUEST_ROLE_NAME],
  permissions: {
    adminRouteAccess: ['granted'],
  },
  grants: {
    guest: [],
    [ADMIN_ROLE_NAME]: [
      'granted_adminRouteAccess',
    ],
  },
});
