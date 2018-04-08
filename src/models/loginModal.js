import { returnByIsReRender, entrypt } from '../utils'
import { getRsaPublicKey, login } from '../services/app'


export default {

    namespace: 'loginModal',

    state: {},

    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },

    effects: {
      *login({ payload: { username, password, callback } }, { call, put }) {  // eslint-disable-line
        const rsaRes = yield getRsaPublicKey();
        if(rsaRes.result) {
          const entryptedPwd = entrypt(password, rsaRes.data);
          const loginRes = yield login({ username, password: entryptedPwd });
          callback && callback(loginRes.data)
        } else {
          callback && callback({ result: false, message: '请求发送失败' });
        }

      },
    },

    reducers: {
      toggleVisible(state, { payload: { visible, isReRender } }) {
        return returnByIsReRender(state, { visible }, isReRender);
      },
    },

  };
