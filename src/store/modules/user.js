export const namespaced = true;

export const state = {
  userInfo: {
    email: "boluokunaiya@gmail.com"
  }
};

export const getters = {
  getUserInfo: state => {
    return state.userInfo;
  },
  getUserEmail: state => {
    return state.userInfo.email;
  }
};

export const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  }
};

export const actions = {};
