import BaseService from "../services/BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";
import AuthServices from "../services/AuthServices";

class TodoService extends BaseService {
  fetchTodoList(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.expense.FETCH_TODO_LIST,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
  createTodo(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.expense.CREATE_TODO_LIST,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
  deleteTodo(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.expense.DELETE_TODO_LIST,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
  updateTodo(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.expense.UPDATE_TODO_LIST,
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
export default TodoService;
