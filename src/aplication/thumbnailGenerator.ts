import { S3Event } from 'aws-lambda';
import { resizer, getImageType, getObjectFromS3 } from '../helpers';

export const handler = async (event: S3Event): Promise<void> => {
  try {
    const record = event.Records[0];

    if (!record) {
      console.log('No se encontraron registros en el evento.');
      return;
    }

    const srcBucket = record.s3.bucket.name;
    const srcKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

    const imageType = getImageType(srcKey);

    if (!imageType) {
      console.log('No se puede determinar el tipo de imagen.');
      return;
    }

    const originImage = await getObjectFromS3(srcBucket, srcKey);

    if (originImage) {
      const imageBuffer = Buffer.from(originImage.Body as string, 'binary');
      const widths = [500, 100, 200];

      for (const width of widths) {
        await resizer(imageBuffer, width, srcBucket, srcKey);
      }

      console.log('Proceso de redimensionamiento exitoso.');
    } else {
      throw new Error('No se pudo obtener la imagen original.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

