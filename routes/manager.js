var express = require('express');
var router = express.Router();
var managerMock = require('../mock/managerMock');
var resHandler = require('../utils/resUtil');

// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  console.log("******", new Date(), "******  request url: ", req.baseUrl+req.url);
  next();
});

/* GET */
router.get('/all', function(req, res, next) {
  res.send(resHandler.success(managerMock.all));
});

router.get('/:id',function(req, res, next){
  res.send(resHandler.success(managerMock.one));
});

module.exports = router;