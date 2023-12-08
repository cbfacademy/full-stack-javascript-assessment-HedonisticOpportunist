// URL HELPERS //
import { localUrlConstants } from "../../constants/localUrlConstant";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

export function getURL(userAction) {
  let url = "";

  if (userAction === "VIEW_MESSAGE") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.MAIN_ENDPOINT
        : localUrlConstants.MAIN_ENDPOINT;
  }

  if (userAction === "LOGIN") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.LOGIN_ENDPOINT
        : localUrlConstants.LOGIN_ENDPOINT;
  }

  if (userAction === "SIGNUP") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.SIGN_UP_ENDPOINT
        : localUrlConstants.SIGN_UP_ENDPOINT;
  }

  if (userAction === "SUBSCRIBE") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.SUBSCRIBE_ENDPOINT
        : localUrlConstants.SUBSCRIBE_ENDPOINT;
  }

  if (userAction === "UNSUBSCRIBE") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.UNSUBSCRIBE_ENDPOINT
        : localUrlConstants.UNSUBSCRIBE_ENDPOINT;
  }

  if (userAction === "GET_SUBSCRIBERS") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.GET_SUBSCRIBERS_ENDPOINT
        : localUrlConstants.GET_SUBSCRIBERS_ENDPOINT;
  }

  if (userAction === "UPLOAD") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.UPLOAD_ENDPOINT
        : localUrlConstants.UPLOAD_ENDPOINT;
  }

  if (userAction === "GET_FILES") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.GET_FILES_ENDPOINT
        : localUrlConstants.GET_FILES_ENDPOINT;
  }

  if (userAction === "DELETE_FILES") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.DELETE_FILE_ENDPOINT
        : localUrlConstants.DELETE_FILE_ENDPOINT;
  }

  if (userAction === "DASHBOARD") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.DASHBOARD_ENDPOINT
        : localUrlConstants.DASHBOARD_ENDPOINT;
  }

  if (userAction === "LOGOUT") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.LOGOUT_ENDPOINT
        : localUrlConstants.LOGOUT_ENDPOINT;
  }

  if (userAction === "AUTO_LOGIN") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.AUTO_LOGIN_ENDPOINT
        : localUrlConstants.AUTO_LOGIN_ENDPOINT;
  }

  return url;
}
