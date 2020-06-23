import { Router } from '../../src/router';

const routes = new Router();

routes.get('/', (app) => {
  return app.callback();
});
