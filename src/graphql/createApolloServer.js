import { ApolloServer } from 'apollo-server-express';
import { Request, Response } from 'oauth2-server';
import { getManager } from 'typeorm';
import Identity from '../orm/entity/Identity';
import rbac from '../rbac';
import schema from './schema';

const _getIdentityRole = async (identity) => {
  if (!identity) {
    return rbac.getRole('guest');
  }

  return rbac.getRole(identity.role.name);
};

const _getIdentity = async ({ oauth, req, res }) => {
  const request = new Request(req);
  const response = new Response(res);

  const entityManager = getManager();

  return oauth.authenticate(request, response)
    .then(token => entityManager.findOne(Identity, token.user.id))
    .catch((error) => {
      console.log('error', error);
      console.error('У пользователя задан токен, но самого пользователя мы не нашли');
      return null;
    });
};

const createApolloServer = ({ oauth }) => {
  return new ApolloServer({
    schema,
    debug: process.env.GRAPHQL_DEBUG === 'yes',
    uploads: {
      maxFileSize: 20000000, // 20 MB
      maxFiles: 20,
    },
    introspection: process.env.GRAPHQL_INTROSPECTION === 'yes',
    rootValue: {},
    context: async ({ req, res }) => {
      const entityManager = getManager();
      const identity = await _getIdentity({ oauth, req, res });
      const acl = await _getIdentityRole(identity);

      return ({
        acl,
        entityManager,
        identity,
      });
    },
  });
};

export default createApolloServer;
