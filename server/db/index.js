var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;

exports.connectMongo = function(callback) {
  MongoClient.connect("mongodb://localhost:27017/blog", function(err, database) {
    if(err) throw err;
  
    callback(database);
  });
}