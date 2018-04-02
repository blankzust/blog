import constants from '../utils/constants.json'
import oathApi from '../api/oauth'
export default {
  namespace: 'user',
  state: {},
  reducers: {},
  effects: {
    *login(state, { payload }) {
      const username = constants.githubConfig.username;
      oathApi.login({});
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'login' })
    }
  },
};
