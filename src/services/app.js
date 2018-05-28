import request from '../utils/request'

export async function getRsaPublicKey() {
  return request('/api/common/getRsaPublicKey');
}

export async function login({ username, password }) {
  console.log("login")
  return request('/api/auth/login', {
    method: 'post',
    body: JSON.stringify({ username, password })
  })
}

export async function logout() {
  return request('/api/auth/logout', {
    method: 'get'
  })
}

// 更新当前用户的基本信息
export async function updateCurrentUser({ password, email, phone }) {
  return request('/api/auth/setPersonal', {
    method: 'post',
    body: JSON.stringify({ password, email, phone})
  })
}
