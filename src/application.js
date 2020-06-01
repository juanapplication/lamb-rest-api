const { Router } = require('./router');

class Application {
  constructor(
    event = {} ,
    context = {},
    callback,
  ) {
    context[`callbackWaitsForEmptyEventLoop`] = true;
    this.event = event;
    this.context = context;
    this.callback = callback;
  }

  path() {
    return `${this.event[`httpMethod`]}::${this.event[`resource`]}`;
  }

  async next(error) {
    if (error) return this.callback(error);
    const path = this.path();
    const handers = Router.routes.get(path);
    if (handers.length === 0) {
      throw new Error('The stack handler is null.');
    }
    const f = handers.shift();
    return await f(this);
  }
}

module.exports.Application = Application;
