var express = require('express');
var router = express.Router();
var daoBlog = require("../model/daoBlog");
var resHandler = require('../utils/resUtil');

// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  console.log("******", new Date(), "******  request url: ", req.baseUrl+req.url);
  next();
});

router.get('/list', function (req, res, next) {
	new daoBlog().list(function(s){
	  res.send(s);
	},function(e){
	  res.send(e);
	});
});

router.get('/:id', function(req, res, next){
	new daoBlog().getById(req.params.id,function(s){
	  res.send(s);
	},function(e){
	  res.send(e);
	});
});

router.post('/add', function(req, res, next){
  var blogItem = req.body;
  new daoBlog().add(blogItem, function(s){
    res.send(s);
  },function(e){
    // res.send(e);
    next(e);
  });
});

module.exports = router;
