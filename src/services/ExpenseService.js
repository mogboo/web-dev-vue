import BaseService from "../services/BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";
import AuthServices from "../services/AuthServices";

class ExpenseService extends BaseService {
  fetchExpense(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.expense.FETCH_EXPENSE,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
  getExpense(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.expense.GET_EXPENSE,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
  createExpense(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.expense.CREATE_EXPENSE,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
}
export default ExpenseService;