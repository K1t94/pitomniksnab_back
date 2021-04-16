import 'reflect-metadata';
import { createConnection } from 'typeorm';
import rbac from '../rbac';
import createExpressServer from './createExpressServer';

const startApp = async () => {
  const port = process.env.PORT || 80;

  const app = await createExpressServer();

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

const doCreateConnection = () => {
  createConnection()
    .then(() => startApp())
    .catch((e) => {
      console.log('error', e);
      console.log('Try reconnect after 10 sec');
      setTimeout(() => {
        doCreateConnection();
      }, 10 * 1000);
    });
};

rbac.init()
  .then(() => {
    doCreateConnection();
  });
