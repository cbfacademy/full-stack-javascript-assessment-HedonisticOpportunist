export const prodUrlConstants = {
  // MAIN ENDPOINT
  MAIN_ENDPOINT: process.env.REACT_APP_BACKEND_URL,

  // AUTHENTICATION ENDPOINTS
  LOGIN_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/login",
  SIGN_UP_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/signup",

  // SUBSCRIBER ENDPOINTS
  SUBSCRIBE_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/subscribe",
  UNSUBSCRIBE_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/delete/:",
  GET_SUBSCRIBERS_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/subscribers",

  // UPLOAD ENDPOINTS
  UPLOAD_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/uploads",
  GET_FILES_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/files",
  DELETE_FILE_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/delete:",

  // DASHBOARD ENDPOINT
  DASHBOARD_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/dashboard",

  // LOGOUT ENDPOINT
  LOGOUT_ENDPOINT: process.env.REACT_APP_BACKEND_URL + "/logout",
};
