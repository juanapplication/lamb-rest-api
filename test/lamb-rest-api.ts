import { LambRestAPI, Router, Application } from '..';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const routes: Router = new Router();

routes.get('/webhook', async (app: Application) => {
  return await app.next(new Error('test'));
  return {
    statusCode: 200,
    body: 'ok'
  }
}, (app: Application) => {
  console.log(app, 'app2')
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
