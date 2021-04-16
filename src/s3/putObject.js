import s3storage from './s3storage';

const putObject = ({ body, bucket, fileKey, ...rest }) => {
  return new Promise((resolve, reject) => {
    s3storage.putObject({
      Body: body,
      Bucket: bucket,
      Key: fileKey,
      ...rest,
    }, (err, data) => {
      if (err) {
        console.error(err, err.stack);
        reject();
      } else {
        resolve(data);
      }
    });
  });
};

export default putObject;
