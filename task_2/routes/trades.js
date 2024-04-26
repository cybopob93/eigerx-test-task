const express = require("express");
const controller = require("../controllers/trades");
const validateCreateTrade = require("../middlewares/validators/createTrade");
const tradeFilter = require("../middlewares/mutators/tradeFilter");
const ExpectedException = require("../exceptions/expectedException");
const DefaultResponse = require("../models/defaultResponse");
const methodNotAllowed = require("../common/methodNotAllowed");
const router = express.Router();

const routes = [
  {
    method: "post",
    url: "/",
    middleware: [validateCreateTrade],
    handler: controller.createTrade,
  },
  {
    method: "get",
    url: "/",
    middleware: [tradeFilter],
    handler: controller.getTrades,
  },
  {
    method: "get",
    url: "/:id",
    middleware: [],
    handler: controller.getById,
  },
  {
    method: "all",
    url: "/:id",
    middleware: [],
    handler: methodNotAllowed,
  },
];

for (const route of routes) {
  router[route.method](route.url, ...route.middleware, (req, res) => {
    route
      .handler(req, res)
      .then((response) => {
        if (response instanceof DefaultResponse) {
          res.status(response.status).json(response.data);
        } else {
          res.send(response);
        }
      })
      .catch((err) => {
        if (err instanceof ExpectedException) {
          res.status(err.status).send(err.message);
        } else {
          console.error(err);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
  });
}

module.exports = router;
