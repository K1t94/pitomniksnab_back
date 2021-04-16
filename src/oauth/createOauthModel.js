import pgPromise from 'pg-promise';
import moment from 'moment-timezone';
import { getConnectionOptions } from 'typeorm';

import getPasswordHash from '../utils/getPasswordHash';

const _getPg = async () => {
  // TODO: Надо все переписать на использование моделей которые уже есть и не использовать чистые запросы. Т.е. все через typeORM
  const connectionOptions = await getConnectionOptions();

  const connection = {
    host: connectionOptions.host,
    port: connectionOptions.port,
    database: connectionOptions.database,
    user: connectionOptions.username,
    password: connectionOptions.password,
  };

  return pgPromise({})(connection);
};

const createOauthModel = async () => {
  const pg = await _getPg();

  /**
   * Get access token.
   */
  const getAccessToken = function (bearerToken) {
    return pg.query('SELECT access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id FROM oauth_tokens WHERE access_token = $1', [bearerToken])
      .then((result) => {
        const token = result[0];

        // Возвращается значение c TZ, а хранится без. Правим этот момент.
        const offset = result[0].access_token_expires_on.getTimezoneOffset();

        return {
          accessTokenExpiresAt: moment(result[0].access_token_expires_on).tz('UTC').minutes(-offset).toDate(),
          accessToken: token.access_token,
          client: { id: token.client_id },
          user: { id: token.user_id },
        };
      });
  };

  /**
   * Get client.
   */
  const getClient = function (clientId, clientSecret) {
    return pg.query('SELECT client_id, client_secret, redirect_uri FROM oauth_clients WHERE client_id = $1 AND client_secret = $2', [
      clientId,
      clientSecret,
    ])
      .then((result) => {
        const oAuthClient = result[0];

        if (!oAuthClient) {
          return;
        }

        return {
          clientId: oAuthClient.client_id,
          clientSecret: oAuthClient.client_secret,
          grants: ['password', 'revoke_token', 'refresh_token'], // the list of OAuth2 grant types that should be allowed
        };
      });
  };

  /**
   * Get refresh token.
   */
  const getRefreshToken = function (bearerToken) {
    return pg.query('SELECT access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id FROM oauth_tokens WHERE refresh_token = $1', [bearerToken])
      .then((result) => {
        if (!result.length) {
          return false;
        }

        const data = result[0];

        // Возвращается значение c TZ, а хранится без. Правим этот момент.
        const offset = result[0].access_token_expires_on.getTimezoneOffset();

        return {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          client: {
            id: data.client_id,
          },
          user: {
            id: data.user_id,
          },
          accessTokenExpiresAt: moment(result[0].access_token_expires_on).tz('UTC').minutes(-offset).toDate(),
          refreshTokenExpiresAt: moment(result[0].access_token_expires_on).tz('UTC').minutes(-offset).toDate(),
        };
      });
  };

  /**
   * Get user.
   */
  const getUser = function (username, password) {
    const passwordHash = getPasswordHash(password);

    return pg.query('SELECT id FROM identity WHERE (LOWER(email) = LOWER($1) OR LOWER(phone) = LOWER($1)) AND password = $2', [
      username,
      passwordHash,
    ])
      .then(result => (result.length ? result[0] : false));
  };

  /**
   * Save token.
   */
  const saveToken = function (token, client, user) {
    const accessTokenExpiresAt = moment.utc(token.accessTokenExpiresAt.toUTCString()).format('YYYY-MM-DD HH:mm:ss');
    const refreshTokenExpiresAt = moment.utc(token.refreshTokenExpiresAt.toUTCString()).format('YYYY-MM-DD HH:mm:ss');

    const params = [
      token.accessToken,
      accessTokenExpiresAt,
      client.clientId,
      token.refreshToken,
      refreshTokenExpiresAt,
      user.id,
    ];

    return pg.query('INSERT INTO oauth_tokens (access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id', params)
      .then((result) => {
        const data = {
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          client: {
            id: client.clientId,
          },
          user: {
            id: user.id,
          },
          accessTokenExpiresAt: token.accessTokenExpiresAt,
          refreshTokenExpiresAt: token.refreshTokenExpiresAt,
        };

        return result.length ? data : false;
      });
  };

  const revokeToken = function (token) {
    return pg.query('DELETE FROM oauth_tokens WHERE access_token = $1 OR refresh_token = $2', [
      token.accessToken,
      token.refreshToken,
    ]).then(result => (result.length ? result[0] : false));
  };

  return {
    getAccessToken,
    getClient,
    saveToken,
    getUser,
    getRefreshToken,
    revokeToken,
  };
};

export default createOauthModel;
