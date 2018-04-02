import { api } from '../config/constants.js'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status <= 304) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options={}) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const defaultOptions = {
    timeout: 150000,
    cache: false,
    method: 'GET',
    credentials: 'include',
    headers
  }

  const response = await fetch(api + url, {...defaultOptions, ...options});
  let result = true;
  try {
    checkStatus(response);
  } catch(err) {
    result = false
    return { result: false, message: err.message }
  }

  const data = await response.json();

  const ret = {
    data,
    headers: {},
    result: true
  };

  if(response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }

  return ret;
}
