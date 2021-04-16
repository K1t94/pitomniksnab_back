import { Request, Response } from 'oauth2-server';

const refreshToken = (oauth) => (req, res) => {
  // TODO: Протестировать
  const request = new Request(req);
  const response = new Response(res);

  return oauth.token(request, response)
    .then((token) => {
      res.json(token);
    }).catch((err) => {
      console.log('err', err);
      res.status(err.code || 500).json(err);
    });
};

const revokeToken = (oauth) => (req, res) => {
  // TODO: Протестировать
  const request = new Request(req);
  const response = new Response(res);

  return oauth.token(request, response)
    .then((token) => {
      res.json(token);
    }).catch((err) => {
      console.log('err', err);
      res.status(err.code || 500).json(err);
    });
};

const obtainToken = (oauth) =>(req, res) => {
  const request = new Request(req);
  const response = new Response(res);

  return oauth.token(request, response)
    .then((token) => {
      res.json(token);
    }).catch((err) => {
      console.log('err', err);
      res.status(err.code || 500).json(err);
    });
};

export {
  refreshToken,
  revokeToken,
  obtainToken,
};