import { LambRestAPI, Router, Application } from '..';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const routes: Router = new Router();

routes.get('/webhook', (app: Application) => {
  return {
    statusCode: 200,
    body: ''
  }
}, async (app: Application) => {
  return {
    statusCode: 200,
    body: ''
  }
});

// (async () => {
//   const res = await LambRestAPI.handler()({
//     httpMethod: 'GET',
//     resource: '/webhook',
//   } as APIGatewayProxyEvent, {} as Context, () => {
//     console.log('ok');
//   });
//   console.log(res, 'lamb-rest-api');
// })();
