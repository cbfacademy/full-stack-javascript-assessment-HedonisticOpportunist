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

  if (userAction === "SUSCRIBE") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.SUSCRIBE_ENDPOINT
        : localUrlConstants.SUSCRIBE_ENDPOINT;
  }

  if (userAction === "UNSUSCRIBE") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.UNSUSCRIBE_ENDPOINT
        : localUrlConstants.UNSUSCRIBE_ENDPOINT;
  }

  if (userAction === "GET_SUSCRIBERS") {
    url =
      process.env.REACT_APP_ENV === "PRODUCTION"
        ? prodUrlConstants.GET_SUSCRIBERS_ENDPOINT
        : localUrlConstants.GET_SUSCRIBERS_ENDPOINT;
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
