const aws = require('aws-sdk');
const crypto = require('crypto');
const { promisify } = require('util');
//env
const dotenv = require('dotenv');
dotenv.config();
//randomise Key in params:
const randomBytes = promisify(crypto.randomBytes);

const region = 'eu-central-1';
const bucketName = 'emilio-gallery';
const accessKeyId = process.env.AWS_KEY_ID;
const secretAccessKey = process.env.AWS_KEY_SECRET;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

async function generateUploadURL() {
  //randomise Key in params:
  const rawBytes = await randomBytes(16);
  const randomImageName = rawBytes.toString('hex');

  const params = {
    Bucket: bucketName,
    Key: `image-${randomImageName}`,
    Expires: 50,
  };

  const uploadURL = s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}

exports.generateUploadURL = generateUploadURL;
