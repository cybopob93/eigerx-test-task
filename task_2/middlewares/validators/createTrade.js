const { availableValidations, validate } = require("../../common/validatior");
const Trades = require("../../models/trades");
const express = require("express");

const validationRules = {
  type: {
    value: [Trades.TYPE.BUY, Trades.TYPE.SELL],
    method: availableValidations.INCLUDE,
    type: "string",
  },
  shares: {
    value: [0, 100],
    method: availableValidations.BETWEEN,
    type: "number",
  },
};

/**
 * Middleware to validate post request for creation trade.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports = function validateCreateTrade(req, res, next) {
  let isValid = true;

  for (const rule in validationRules) {
    const field = req.body[rule];
    const rules = validationRules[rule];

    if (!validate(field, rules)) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    next();
  } else {
    res.sendStatus(400);
  }
};
