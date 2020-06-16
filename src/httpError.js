class HttpError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.body = JSON.stringify({
      message,
    });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }
    HttpError.prototype.toJSON = function() {
      return {
        body: this.body,
        statusCode: this.statusCode
      }
    }
  }
}

const e = new HttpError('ok', 400);
console.error(e.toJSON());

module.exports.HttpError = HttpError;
