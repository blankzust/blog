import { updateCurrentUser, getRsaPublicKey } from '../services/app'
import { returnByIsReRender, entrypt } from '../utils'

export default {
  namespace: 'personalModal',
  state: {},
  reducers: {
    toggleVisible(state, { payload: { visible } }) {
      return { ...state, visible }
    }
  },
  effects: {
    *save({ payload: { password, email, phone, callback } }, { put, call, select }) {
      let newPassword = undefined;
      if(password) {
        const rsaRes = yield getRsaPublicKey();
        if(rsaRes.result) {
          newPassword = entrypt(password, rsaRes.data);
        } else {
          callback && callback(rsaRes)
          return;
        }
      }

      const res = yield updateCurrentUser({ email, phone, password: newPassword });
      if(res.result) {
        yield put({
          type: 'toggleVisible',
          payload: {
            visible: false
          }
        })
      }

      callback && callback(res);
    }
  }
}
