import AuthServices from "../../services/AuthServices";
import LoaderUtils from "../../utils/BaseUtils/LoaderUtils";
import RouterUtils from "../../utils/BaseUtils/RouterUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import router from "@/router/router";
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
  registrationComplete() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    console.log("registrationComplete formbody =>", formBody);
    let payload = {
      email: formBody.email,
      uniqueRef: formBody.uniqueRef,
      username: formBody.username,
      token: formBody.token,
      password: formBody.password
    };
    let successAction = responseData => {
      //save user info in the store
      StoreUtils.commit("user/SET_USER_INFO", responseData);
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
      StoreUtils.dispatch("form/resetForm");
    };
    let loaderType = LoaderUtils.types.BLOCKING;

    authService.registrationComplete(payload, successAction, loaderType);
  },
  registrationInit() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    console.log("formbody =>", formBody);
    let payload = {
      email: formBody.email,
      firstName: formBody.firstName,
      lastName: formBody.lastName
    };
    let successAction = responseData => {
      //save unique ID to form store
      StoreUtils.commit("form/BUILD_FORM_BODY", {
        uniqueRef: responseData.uniqueRef
      });
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE");
    };
    let loaderType = LoaderUtils.types.BLOCKING;

    authService.registrationInit(payload, successAction, loaderType);
  },
  login() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      userID: formBody.userID,
      password: formBody.password
    };
    let successAction = responseData => {
      //save user info in the store
      StoreUtils.commit("user/SET_USER_INFO", responseData);
      //route the user to the dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
      //reset form
      StoreUtils.dispatch("form/resetForm");
    };
    let loaderType = LoaderUtils.types.BLOCKING;

    authService.logIn(payload, successAction, loaderType);
  }
};
