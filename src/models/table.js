const initialState = {
  list: [],
  cols: []
}

export default {
  namespace: 'table',
  state: initialState,
  reducers: {
    setData(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {

  },
  subscriptions: {},
}
