class ExpectedException extends Error {
  status = 400;

  constructor(message = "Expected exception", statusCode = 400) {
    super(message);
    this.name = "ExpectedException";
    this.status = statusCode;
  }
}

module.exports = ExpectedException;
