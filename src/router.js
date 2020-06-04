class Router {

  constructor() {
    this.path = '';
  }

  static get routes() {
    if (!Router.routes$) {
      Router.routes$ = new Map();
    }
    return Router.routes$;
  }

  get routes() {
    if (!Router.routes$) {
      Router.routes$ = new Map();
    }
    return Router.routes$;
  }

  buildPath(method, resource) {
    return `${ method }::${ resource }`;
  }

  get(path, ...handers) {
    this.path = this.buildPath('GET', path);
    this.routes.set(this.path, handers);
  }

  post(path, ...handers) {
    this.path = this.buildPath('POST', path);
    this.routes.set(this.path, handers);
  }

  put(path, ...handers) {
    this.path = this.buildPath('PUT', path);
    this.routes.set(this.path, handers);
  }

  patch(path, ...handers) {
    this.path = this.buildPath('PATCH', path);
    this.routes.set(this.path, handers);
  }

  delete(path, ...handers) {
    this.path = this.buildPath('DELETE', path);
    this.routes.set(this.path, handers);
  }
}

module.exports.Router = Router;
