import NodeRSA from 'node-rsa'

// state发生变化，但是是否要影响相关页面重新渲染
function returnByIsReRender(oldState, newState, isReRender) {
  if (isReRender != false) {
    return { ...oldState, ...newState };
  } else {
    Object.keys(newState).map((key) => {
      oldState[key] = newState[key];
    })
    return oldState;
  }
}

// rsa加密
function entrypt(plain, publicKey) {
  var rsa = new NodeRSA(publicKey);
  return rsa.encrypt(plain, 'hex');
}

export default {
  returnByIsReRender,
  entrypt
}
