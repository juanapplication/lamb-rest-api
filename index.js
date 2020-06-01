const { Application } = require('./src/application');
const { Router } = require('./src/router');

class LambRestAPI {
  static handler(options = {}) {
    return async (event, context, callback) => {
      const app = options.application || new Application(event, context, callback);
      if (Router.routes.has(app.path())) {
        const f = Router.routes.get(app.path()).shift();
        return await f(app);
      }
      return {
        statusCode: 404,
        body: 'FILE_NOT_FOUND',
      }
    }
  }
}

module.exports = {
  Application,
  Router,
  LambRestAPI,
}