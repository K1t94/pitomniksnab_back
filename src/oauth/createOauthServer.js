import OAuth2Server from 'oauth2-server';
import createOauthModel from './createOauthModel';

const accessTokenLifetime = 60 * 60 * 24 * 30; // 30 дней

const env = process.env.NODE_ENV || 'development';
const isDevelop = env === 'development';

const createOauthServer = async () => {
  const model = await createOauthModel();

  return new OAuth2Server({
    debug: isDevelop,
    model,
    accessTokenLifetime,
    allowBearerTokensInQueryString: true,
  });
};

export default createOauthServer;
