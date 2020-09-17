import AuthServices from "../../services/AuthServices";
import LoaderUtils from "../../utils/BaseUtils/LoaderUtils";
import RouterUtils from "../../utils/BaseUtils/RouterUtils";
import StoreUtils from "@/utils/BaseUtils/StoreUtils";
const authService = new AuthServices();

export const namespaced = true;

export const state = {
  userOptions: {
    requestId: "",
    categoryId: "",
    insuranceCompanyId: "",
    username: ""
  }
};

export const getters = {
  getUserOptions: state => {
    return state.userOptions;
  },
  getRequestId: state => {
    return state.userOptions.requestId;
  },
  getCategoryId: state => {
    return state.userOptions.categoryId;
  },
  getInsuranceCompanyId: state => {
    return state.userOptions.insuranceCompanyId;
  },
  getUsername: state => {
    return state.userOptions.username;
  }
};

export const mutations = {
  SET_USER_OPTIONS(state, payload) {
    state.userOptions = payload;
  }
};

export const actions = {
  login() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    console.log("formbody =>", formBody);
    let payload = {
      userID: formBody.userID,
      password: formBody.password
    };
    let successAction = () => {
      //save user info in the store
      StoreUtils.commit(mutationTOcommit)
    };
    let loaderType = LoaderUtils.types.BLOCKING;

    authService.logIn(payload, successAction, loaderType);
  }
};
