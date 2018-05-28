var mongo = require("mongodb");
var path = require("path");
var Server = mongo.Server;
var MongoClient = mongo.MongoClient;

var express = require('express');
var app = new express();
// 引入json解析中间件
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
const router = app
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cookieParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', "*")
  res.set("Content-Type", 'application/json')
  res.set("Access-Control-Allow-Credentials", true)
  if (req.method == "OPTIONS") {
    res.set("Access-Control-Allow-Headers", 'content-type')
    res.status(200);
  }
  next();



})


var db;
var redisClient;
// 开启redis
require("./redis").startRedis(function (client) {
  redisClient = client;
  // 链接数据库
  require("./db").connectMongo(function (database) {
    db = database;
    var server = app.listen(8082, function () {
      console.log("启动")
    });
  })
});

app.engine('html', require('ejs').renderFile);
app.engine('js', require('ejs').renderFile);
app.engine('css', require('ejs').renderFile);


// 路由
var authController = require('./controller/auth.js')
app.post('/api/auth/login', (req, res) => authController.login({ req, res, db, redisClient }));
app.get('/api/auth/logout', (req, res) => authController.logout({ req, res, db, redisClient }));
app.get('/api/common/getRsaPublicKey', function (req, res) { authController.getClientRsaPublicKey({ req, res, db }) })
app.get('/api/auth/getCurrentUser', (req, res) => authController.currentUser({ req, res, db, redisClient }));
app.post('/api/auth/setPersonal', (req, res) => authController.setPersonal({ req, res, db, redisClient }))

// 页面路由
app.get('/view/:name', (req, res) => {
  console.log("view");
  var fileName = req.params.name;
  if(fileName.indexOf('.html') >= 0) {
    res.set("content-type", "text/html")
  } else if(fileName.indexOf(".js") >= 0) {
    res.set("content-type", "application/javascript")
  } else if(fileName.indexOf('.css') >= 0) {
    res.set("content-type", "text/css")
  }

  res.render(path.resolve(__dirname, "../dist/" + fileName))

  res.end();
})

// app.use(express.static(path.resolve(__dirname, "../dist/")));
