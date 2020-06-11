const { Application } = require('./src/application');
const { Router } = require('./src/router');
const { HttpError } = require('./src/httpError');

class LambRestAPI {
  static handler(options = {}) {
    return async (event, context, callback) => {
      try {
        const app = options.application || new Application(event, context, callback);
        if (Router.routes.has(app.path())) {
          const fs = Router.routes.get(app.path());
          app.fs = [...fs];
          const f = app.fs.shift();
          return await f(app);
        }
        throw new HttpError('FILE_NOT_FOUND', 404);
      } catch (error) {
        return new HttpError('INTERNAL_SERVER_ERROR', 500);
      }
    }
  }
}

module.exports = {
  Application,
  Router,
  LambRestAPI,
}