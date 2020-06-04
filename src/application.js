const { Router } = require('./router');

class Application {
  constructor(
    event = {},
    context = {},
    callback,
  ) {
    context[`callbackWaitsForEmptyEventLoop`] = true;
    this.event = event;
    this.context = context;
    this.callback = callback;
    this.statusCode = 200;
    this.fs = [];
  }

  path() {
    return `${this.event[`httpMethod`]}::${this.event[`resource`]}`;
  }

  async next(error) {
    if (error) return this.callback(error);
    if (!this.fs.length) {
      throw new Error('The stack handler is null');
    }
    const f = this.fs.shift();
    return await f(this);
  }

  json(data) {
    const body = JSON.stringify(data, null, 2);
    return this.callback(null, {
      statusCode: this.statusCode,
      body,
    });
  }
}

module.exports.Application = Application;
