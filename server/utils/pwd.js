var crypto = require("crypto");
var { Buffer } =  require("buffer");

var fs = require("fs");
var util = require("util");

/**
 * 将数据库存储的明文和请求发过来的公钥密文进行比较
 * @param {*} publicPwd 公钥密文
 * @param {*} realPwd 明文
 */
var verify = function(publicPwd, realPwd) {
  if(!realPwd || !publicPwd) {
    return false;
  }
  
  var plain1 = clientDecript(publicPwd);
  var plain2 = serverDecript(realPwd);
  if(plain1.err || plain2.err) {
    return false;
  } else {
    return Buffer.compare(plain1, plain2) == 0;
  }
  
}

// 客户端公钥加密
var clientEncript = function(plain) {
  var publicPem = fs.readFileSync(__dirname + "/rsa_public_key.pem");
  var publicKey = publicPem.toString();
  var cript = crypto.publicEncrypt({ key: publicKey }, Buffer.from(plain, "hex"));
  return cript;
}

// 客户端私钥解密
var clientDecript = function(cipher) {
  var privatePem = fs.readFileSync(__dirname + "/rsa_private_key.pem");
  var privateKey = privatePem.toString();

  try {
    var decipher = crypto.privateDecrypt({ key: privateKey }, Buffer.from(cipher, "hex"))
    return decipher;
  } catch(err) {
    console.error(err)
    return { err }
  }
 
}

// 服务端公钥加密
var serverEncript = function(plain) {
  var publicPem = fs.readFileSync(__dirname + "/server_public_key.pem");
  var publicKey = publicPem.toString();
  var cript = crypto.publicEncrypt({ key: publicKey }, Buffer.from(plain, "hex"));
  return cript;
}

// 服务端私钥解密
var serverDecript = function(cipher) {
  var privatePem = fs.readFileSync(__dirname + "/server_private_key.pem");
  var privateKey = privatePem.toString();

  try {
    var decipher = crypto.privateDecrypt({ key: privateKey }, Buffer.from(cipher, "hex"))
    return decipher;
  } catch(err) {
    console.error(err);
    return { err }
  }
}

module.exports = {
  verify,
  clientDecript,
  clientEncript,
  serverDecript,
  serverEncript
}