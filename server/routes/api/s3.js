const aws = require('aws-sdk');
const crypto = require('crypto');
const { promisify } = require('util');
//env
const dotenv = require('dotenv');
dotenv.config();

//config
const region = 'eu-central-1';
const bucketName = 'emilio-gallery';
const accessKeyId = process.env.AWS_KEY_ID;
const secretAccessKey = process.env.AWS_KEY_SECRET;
// Create S3 service object
const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

//GET RANDOM SECURE URL!!!
//for uploading images straightaway from client
const generateUploadURL = async () => {
  //randomise Key in params:
  const randomBytes = promisify(crypto.randomBytes);
  const rawBytes = await randomBytes(16);
  const randomImageName = rawBytes.toString('hex');

  const params = {
    Bucket: bucketName,
    Key: `image-${randomImageName}`,
    Expires: 50,
  };

  const uploadURL = s3.getSignedUrlPromise('putObject', params);
  console.log(uploadURL, 'uploadURL');
  return uploadURL;
};

//GET LIST OF OBJECTS!!!
// const getListOfObjects =() => {
//   // Create the parameters for calling listObjects
//   var bucketParams = {
//     Bucket: bucketName,
//   };
//   try {
//     aws.config.setPromisesDependency();

//     // Call S3 to obtain a list of the objects in the bucket
//     const response = await s3
//       .listObjectsV2(bucketParams, function (err, data) {
//         if (err) {
//           console.log('Error', err);
//         } else {
//           console.log('Success data received', data.Contents[0].Key);
//         }
//         // return data.Contents[0].Key;
//       })
//       .promise();
//     console.log('response', response);
//   } catch (e) {
//     console.log(e, 'error');
//   }
// };

function getListOfObjects() {
  var bucketParams = {
    Bucket: bucketName,
  };

  var pListObjects = new Promise(function (resolve, reject) {
    s3.listObjects(bucketParams, function (err, data) {
      if (err) {
        return reject(err);
      }

      resolve(
        data.Contents.sort(function (a, b) {
          console.log(a.LastModified, 'DATEEEE');
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return b.LastModified - a.LastModified;
        })
      );
    });
  });

  return pListObjects;
}

function deleteObjectFromBucket(id) {
  s3.deleteObject(
    {
      Bucket: bucketName,
      Key: id,
    },
    function (err, data) {
      if (err) {
        console.log(err, 'error');
      } else {
        console.log(data, 'data object deleted');
      }
    }
  );
}

exports.generateUploadURL = generateUploadURL;
exports.getListOfObjects = getListOfObjects;
exports.deleteObjectFromBucket = deleteObjectFromBucket;
