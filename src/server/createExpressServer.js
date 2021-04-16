import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import createApolloServer from '../graphql/createApolloServer';
import createOauthServer from '../oauth/createOauthServer';
import { obtainToken, refreshToken, revokeToken } from '../oauth/oauthActions';

const createExpressServer = async () => {
  const app = express();

  app.options("*", cors());

  app.use(morgan('tiny'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.disable('x-powered-by');
  app.use(compression());

  app.oauth = await createOauthServer();

  const server = createApolloServer({ oauth: app.oauth });

  server.applyMiddleware({ app });

  app.all('/oauth/token', cors(), obtainToken(app.oauth));
  app.all('/oauth/token/refresh', cors(), refreshToken(app.oauth));
  app.all('/oauth/token/revoke', cors(), revokeToken(app.oauth));

  app.all('/ping', cors(), (req, res) => {
    return res.status(200).json({ 'pong': new Date().getTime() });
  });

  return app;
};

export default createExpressServer;
