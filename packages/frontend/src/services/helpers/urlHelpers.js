import { localUrlConstants } from "../../constants/localUrlConstant";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

export function getURL(url, userAction) {
  if (userAction === "VIEW_MESSAGE") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.MAIN_ENDPOINT
        : localUrlConstants.MAIN_ENDPOINT;
  }

  if (userAction === "LOGIN") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.LOGIN_ENDPOINT
        : localUrlConstants.LOGIN_ENDPOINT;
  }

  if (userAction === "SIGNUP") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.SIGN_UP_ENDPOINT
        : localUrlConstants.SIGN_UP_ENDPOINT;
  }

  if (userAction === "SUSCRIBE") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.SUSCRIBE_ENDPOINT
        : localUrlConstants.SUSCRIBE_ENDPOINT;
  }

  if (userAction === "UNSUSCRIBE") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.UNSUSCRIBE_ENDPOINT
        : localUrlConstants.UNSUSCRIBE_ENDPOINT;
  }

  if (userAction === "GET_SUSCRIBERS") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.GET_SUSCRIBERS_ENDPOINT
        : localUrlConstants.GET_SUSCRIBERS_ENDPOINT;
  }

  if (userAction === "UPLOAD") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.UPLOAD_ENDPOINT
        : localUrlConstants.UPLOAD_ENDPOINT;
  }

  if (userAction === "VIEW_DASHBOARD") {
    url =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.DASHBOARD_ENDPOINT
        : localUrlConstants.DASHBOARD_ENDPOINT;
  }

  return url;
}
