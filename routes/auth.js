var express = require('express');
var router = express.Router();
var authMock = require('../mock/authMock');
var resHandler = require('../utils/resUtil');

// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  console.log("******", new Date(), "******  request url: ", req.baseUrl+req.url);
  next();
});


router.get('/admin', function(req, res, next) {
  res.send(authMock.admin);
});

router.get('/visitor', function(req, res, next) {
  res.send(authMock.visitor);
});


module.exports = router; 