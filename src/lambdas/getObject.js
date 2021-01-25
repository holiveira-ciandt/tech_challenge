const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01', region: 'us-east-1' });


exports.handler = async (event, context) => {

    // Get the object from the event and show its content type
    const bucket = "h-oliveira-iheart.com";
    const key = 'data.json';
    const params = {
        Bucket: bucket,
        Key: key,
        ResponseContentType:'application/json'
    };
    try {
        const data = await s3.getObject(params).promise();
        return JSON.parse(data.Body);

    } catch (err) {
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        throw new Error(message);
    }
};
