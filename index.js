var express = require('express');
var daoBlog = require("./model/daoBlog");

var app = express();
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});


app.get('/', function (req, res) {
	res.send('Hello World!');
});
app.get('/blog/list', function (req, res) {
	new daoBlog().list(function(s){
	  res.send(s);
	},function(e){
	  res.send(e);
	});
});
app.get('/blog/:id',function(req,res){
	new daoBlog().getById(req.params.id,function(s){
	  res.send(s);
	},function(e){
	  res.send(e);
	});
});
//  POST 请求
app.post('/', function (req, res) {
	console.log("主页 POST 请求");
	res.send('Hello POST');
});


