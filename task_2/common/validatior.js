/**
 * Enum of available validations for a validation.
 *
 * @readonly
 * @enum {string}
 */
const availableValidations = Object.freeze({
  INCLUDE: "INCLUDE",
  BETWEEN: "BETWEEN",
});

/**
 * Checks if a value includes a specific data.
 *
 * @param {string | number} data - The data to search for.
 * @param {Array} value - The value to check.
 * @returns {boolean} - Returns true if the value includes the data, otherwise false.
 */
function validationInclude(data, value) {
  return value.includes(data);
}

/**
 * Validates if a given value is between a specified range.
 *
 * @param {number} data - The value to be validated.
 * @param {Array<number>} value - The range of values to compare with. value[0] represents the start of the range, and value[1] represents the end of the range.
 * @returns {boolean} - True if the value is between the specified range, false otherwise.
 */
function validationBetween(data, value) {
  return data >= value[0] && data <= value[1];
}

/**
 * Validates a given field based on provided rules.
 *
 * @param {any} field - The field to be validated.
 * @param {Object} rules - The validation rules for the field.
 * @param {string} rules.type - The expected type of the field.
 * @param {string} rules.method - The validation method to be used.
 * @param {*} rules.value - The value to be used for the validation method.
 * @returns {boolean} - Returns true if the field passes validation, false otherwise.
 */
function validate(field, rules) {
  switch (true) {
    case !field:
    case typeof field !== rules.type:
      return false;
    case rules.method === availableValidations.INCLUDE:
      return validationInclude(field, rules.value);
    case rules.method === availableValidations.BETWEEN:
      return validationBetween(field, rules.value);
    default:
      return true;
  }
}

module.exports = {
  availableValidations,
  validate,
};
