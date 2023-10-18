import * as AWS from 'aws-sdk';
import sharp from 'sharp';

const s3 = new AWS.S3({ signatureVersion: 'v4' });

export const resizer = async (imgBody: Buffer, newSize: number, dstBucket: string, fileKey: string): Promise<void> => {
  const nameFile = fileKey.split('/')[1];
  const dstKey = `resized/${newSize}-${nameFile}`;
  let buffer: Buffer | null = null;

  try {
    buffer = await sharp(imgBody).resize(newSize).toBuffer();
  } catch (error) {
    console.error(error);
    return;
  }

  try {
    const destparams: AWS.S3.PutObjectRequest = {
      Bucket: dstBucket,
      Key: dstKey,
      Body: buffer,
      ContentType: 'image',
    };

    await s3.putObject(destparams).promise();
    console.log('Se finaliza el redimensionamiento de la imagen');
  } catch (error) {
    console.error(error);
    return;
  }
};
