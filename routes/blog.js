var express = require('express');
var router = express.Router();
var daoBlog = require("../model/daoBlog");
var resHandler = require('../utils/resUtil');

var DAO = new daoBlog();

// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  console.log("******", new Date(), "******  request url: ", req.baseUrl+req.url);
  next();
});

router.get('/list', function (req, res, next) {
	DAO.list(function(s){
	  res.send(resHandler.success(s));
	},function(e){
	  next(e, req, res, next);
	});
});

router.get('/:id', function(req, res, next){
  if(typeof req.params.id === 'number'){
    next({status:400},req,res)
  }else{
    DAO.getById(req.params.id,function(s){
  	  res.send(resHandler.success(s));
  	},function(e){
  	  next(e, req, res, next);
  	});  
  }
});

router.post('/add', function(req, res, next){
  var blogItem = req.body;
  DAO.add(blogItem, function(s){
    res.send(resHandler.success(s));
  },function(e){
    next(e, req, res, next);
  });
});

router.post('/update', function(req, res, next){
  var blogItem = req.body;
  DAO.update(blogItem, function(s){
    res.send(resHandler.success(s));
  },function(e){
    next(e, req, res, next);
  });
});

router.post('/like', function(req, res, next){
  var paramsBody = req.body;  // {id:number,like:boolean}
  DAO.like(paramsBody, function(s){
    res.send(resHandler.success(s));
  },function(e){
    next(e, req, res, next);
  });
});

router.post('/view', function(req, res, next){
  var paramsBody = req.body;  // {id:number}
  DAO.addView(paramsBody, function(s){
    res.send(resHandler.success(s));
  },function(e){
    next(e, req, res, next);
  });
});

module.exports = router;
