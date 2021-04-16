import crypto from 'crypto';

const SECRET = 'a222dasd$$2a)-';

const getPasswordHash = password => crypto
  .createHmac('sha256', SECRET)
  .update(password)
  .digest('hex');

export default getPasswordHash;
