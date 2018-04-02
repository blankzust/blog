var redis = require("redis")

exports.startRedis = function(callback) {
  var client = redis.createClient("6379", '127.0.0.1');
  callback && callback(client)
}