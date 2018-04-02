import request from './request'
export default {
  get: function(url, options) {
    let paramStr = '';
    if(options) {
      Object.keys(options).forEach((key, index) => {
        if(index > 0) {
          paramStr += '&' + key + '=' + options[key]
        } else {
          paramStr += key + '=' + options[key]
        }
      })
    }

    const infoUrl = url + '?' + paramStr;
    return request(infoUrl, {
      Headers: {
        type: 'GET'
      }
    });
  },

  post: function(url, options) {
    
  }
}