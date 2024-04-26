const Trade = require("../models/trades");
const DefaultResponse = require("../models/defaultResponse");
const ExpectedException = require("../exceptions/expectedException");

exports.createTrade = async function (req) {
  const result = await Trade.create(req.body);
  return Promise.resolve(new DefaultResponse(result.dataValues, 201));
};

exports.getTrades = async function (req) {
  const trades = await Trade.findAll({ where: req.queryFilter ?? {} });
  return Promise.resolve(new DefaultResponse(trades, 200));
};

exports.getById = async function (req) {
  if (!req.params.id || isNaN(req.params.id)) {
    throw new ExpectedException("Invalid id", 400);
  }
  const trade = await Trade.findByPk(req.params.id);
  if (!trade) {
    throw new ExpectedException("ID not found", 404);
  }
  return Promise.resolve(new DefaultResponse(trade, 200));
}