var easyMonitor = require('easy-monitor');
easyMonitor('node-blog-server');

var express = require('express');
var bodyParser = require('body-parser');
var manager = require('./routes/manager');
var blog = require('./routes/blog');
var auth = require('./routes/auth');

var app = express();
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS 设置
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.sendStatus(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

// Manager
app.use('/manager', manager);

// Blog
app.use('/blog', blog);

// Auth
app.use('/auth', auth);


// error handler
app.use(function(err, req, res, next) {
  console.log("++++++++  Err handler    ++++++++",err.status);
  res.sendStatus(err.status || 500);
});

// GET 请求
app.get('/', function (req, res) {
	res.send('Hello World!');
});
//  POST 请求
app.post('/', function (req, res) {
	console.log("主页 POST 请求", req.body);
	res.send('Hello POST');
});





