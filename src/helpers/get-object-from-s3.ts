import * as AWS from 'aws-sdk';
const s3 = new AWS.S3({ signatureVersion: 'v4' });

export const getObjectFromS3 = async (bucket: string, key: string) => {
  try {
    const params = { Bucket: bucket, Key: key };
    return await s3.getObject(params).promise();
  } catch (error) {
    console.error('Error al obtener la imagen de S3:', error);
    return null;
  }
};