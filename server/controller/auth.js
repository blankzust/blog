var { verify } = require('../utils/pwd.js');
var { getUUID } = require('../utils/util.js')
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require("path")

exports.login = function ({req, res, db, userTokenMap, redisClient}) {
  // 登录
  // 1.获取用户名密码
  var body = req.body;
  var { username, password } = body;

  // 2.转码
  var collection = db.collection("sys_user");
  collection.find({ username }).toArray(function(err, result) {
    res.status(200);
    res.set('Access-Control-Allow-Origin', "*")
    if(err) {
      res.json({ result: false, message: '系统错误' })
      res.end();
      throw err
    }

    if(result.length > 0) {
      if(verify(password, result[0].password)) {
        var token = getUUID(10);
        result[0].password = undefined;
        redisClient.set(token, JSON.stringify(result[0]))
        res.cookie('token', token);
        res.json({ result: true, message: '登录成功' });
        res.end();
      } else {
        res.json({ result: false, message: '用户名或者密码错误' });
        res.end();
      }
    } else {
      res.json({ result: false, message: '用户名或者密码错误' });
      res.end();
    }
  })

  // 3.匹配数据库
  // 4.token写入cookie
  // 5.token对应用户信息写入缓存
}

exports.logout = function({ req, res, redisClient }) {

  var token = req.cookies && req.cookies.token;

  if(token) {
    res.clearCookie('token')
    redisClient.del(token, function(err, numRemoved) {
      res.json({ result: true, message: '成功退出登录' })
      res.end();
    })
  } else {
    res.json({ result: false, message: '当前未登录' })
    res.end();
  }
  // 退出登录
  // 1.获取cookie中的用户token
  // 2.清除token在缓存中对应的用户信息

}

exports.getClientRsaPublicKey = function({ req, res }) {
  var publicPem = fs.readFileSync(path.resolve(__dirname, "../utils/rsa_public_key.pem"));
  var publicKey = publicPem.toString();

  res.set('Content-Type', 'text/plain');
  res.json(publicKey);

  res.status(200);
  res.end();
}

exports.currentUser = function({ req, res, redisClient }) {
  var token = req.cookies && req.cookies.token;
  if(token) {
    redisClient.get(token, function(err, dataRes) {
      if(!dataRes) {
        res.json({ result: false, message: 'token失效' });
        res.end();
      } else {
        var data = JSON.parse(dataRes.toString());
        res.json({ result: true, data });
        res.end();
      }
    })
  } else {
    res.json({ result: false, message: 'token不得为空' })
    res.end();
  }

}

exports.setPersonal = function({ req, res, redisClient, db }) {
  var token = req.cookies && req.cookies.token;
  var newUserInfo = req.body;
  var allowChangeProperties = ['name', 'sex'];
  if(token) {
    redisClient.get(token, function(err, dataRes) {
      if(dataRes) {
        var oldUserInfo = JSON.parse(dataRes.toString())
        var trueNewUserInfo = {};
        allowChangeProperties.forEach(function(key) {
          trueNewUserInfo[key] = newUserInfo[key] || oldUserInfo[key]
        })

        db.collection('sys_user').update({ id: oldUserInfo.id }, trueNewUserInfo)
      }
    })
  }
}
