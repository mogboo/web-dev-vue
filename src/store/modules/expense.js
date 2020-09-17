import ExpenseService from "../../services/ExpenseService";
import LoaderUtils from "../../utils/BaseUtils/LoaderUtils";
import RouterUtils from "../../utils/BaseUtils/RouterUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import router from "@/router/router";
const expenseService = new ExpenseService();

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
  }
};

export const actions = {
  fetchExpense() {
    let payload = {
      email: StoreUtils.rootGetters("user/getUserEmail")
    };
    let successAction = responseData => {
      StoreUtils.commit("table/SET_TABLE_DATA", responseData.expense);
    };

    expenseService.fetchExpense(
      payload,
      successAction,
      LoaderUtils.types.TABLE
    );
  },
  createExpense() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      email: formBody.email,
      cost: formBody.cost,
      category: formBody.category,
      description: formBody.description
    };
    let successAction = responseData => {
      //save user info in the store
      StoreUtils.commit("form/BUILD_FORM_BODY", responseData);
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
      StoreUtils.dispatch("form/resetForm");
    };
    let loaderType = LoaderUtils.types.BLOCKING;

    expenseService.createExpense(payload, successAction, loaderType);
  }
};
