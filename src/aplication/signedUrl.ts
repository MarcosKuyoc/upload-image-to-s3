import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as AWS from 'aws-sdk';
const s3 = new AWS.S3({signatureVersion: 'v4'});

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const filename = event.queryStringParameters!.filename;
    const signedUrl = await s3.getSignedUrlPromise('putObject', {
      Key: `upload/${filename}`,
      Bucket: process.env.BUCKED,
      Expires: 300
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        signedUrl
      }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'some error happened',
      }),
    };
  }
};