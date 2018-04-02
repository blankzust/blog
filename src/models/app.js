import { getCurrentUser } from "../services/users";
import { returnByIsReRender } from '../utils'

export default {
  
    namespace: 'app',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        dispatch({
          type: 'getCurrentUser'
        })
      },
    },
  
    effects: {
      *init({ payload }, { call, put }) {  // eslint-disable-line
        
      },
      *getCurrentUser({ payload }, { call, put }) {
        const userRes = yield getCurrentUser();
        if(userRes.result) {
          yield put({
            type: 'saveCurrentUser',
            payload: {
              currentUser: userRes.data.data
            }
          })
        }
      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      saveCurrentUser(state, { payload: {currentUser, isReRender} }) {
        return returnByIsReRender(state, { currentUser }, isReRender)
      }
    },
  
  };
  