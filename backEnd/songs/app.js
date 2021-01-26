// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

const url = 'https://s3.amazonaws.com/h-oliveira-iheart.com/data.json';
let response;
console.log('response', response);
exports.lambdaHandler = async (event, context) => {
  try {
    const ret = await axios(url);

    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body: JSON.stringify({
        data: ret.data,
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }
  return response;
};
