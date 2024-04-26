const ExpectedException = require("../exceptions/expectedException");

module.exports = function methodNotAllowed() {
  return Promise.reject(new ExpectedException("", 405));
}