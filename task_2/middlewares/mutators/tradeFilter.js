// const Trade = require("../../models/trades");

module.exports = function tradeFilter(req, res, next) {
  if (req.query && Object.keys(req.query).length > 0) {
	req.queryFilter = {};
	for (let key in req.query) {
	  const queryValue = req.query[key];
	  switch (key) {
		case "type": {
		  // I left it because... I think that would be more correct
		  // if (![Trade.TYPE.BUY, Trade.TYPE.SELL].includes(queryValue)) {
			// continue;
		  // }
		  req.queryFilter.type = queryValue;
		  break;
		}
		case "user_id":
		  if (isNaN(Number(queryValue))) {
			continue;
		  }
		  req.queryFilter.user_id = Number(queryValue);
		  break;
	  }
	}
  }
  next();
}