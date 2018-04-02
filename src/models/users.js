import * as userService from '../services/users'
export default {
  namespace: 'users',
  state: {
    list: [],
    total: null
  },
  reducers: {
    save(state, { payload: { data: list, total, loading, page } }) {
      return { ...state, list, total, loading, page }
    }
  },
  effects: {
    *list({ payload: { page = 1 } }, { call, put }) {
      console.log(page);
      yield put({ type: 'save', payload: {
        loading: true
      }})
      const { data, headers } = yield call(userService.list, { page });
      yield put({ type: 'save', payload: { 
        data,
        total: parseInt(headers['x-total-count'], 10),
        page: parseInt(page, 10),
        loading: false
      }});
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if(pathname === '/users') {
          dispatch({ type: 'list', payload: query })
        }
      })
    }
  },
};
