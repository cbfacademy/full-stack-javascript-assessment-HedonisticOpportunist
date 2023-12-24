const hostUrl = "http://localhost:5000";

export const localUrlConstants = {
  // MAIN ENDPOINT
  MAIN_ENDPOINT: hostUrl,

  // AUTHENTICATION ENDPOINTS
  LOGIN_ENDPOINT: `${hostUrl}/login`,
  SIGN_UP_ENDPOINT: `${hostUrl}/signup`,

  // SUBSCRIBER ENDPOINTS
  SUBSCRIBE_ENDPOINT: `${hostUrl}/subscribe`,
  UNSUBSCRIBE_ENDPOINT: `${hostUrl}/deleteSubscriber:`,
  GET_SUBSCRIBERS_ENDPOINT: `${hostUrl}/subscribers`,

  // UPLOAD up
  UPLOAD_ENDPOINT: `${hostUrl}/uploads`,
  GET_FILES_ENDPOINT: `${hostUrl}/files`,
  DELETE_FILE_ENDPOINT: `${hostUrl}/deleteFile:`,

  // DASHBOARD ENDPOINT
  DASHBOARD_ENDPOINT: `${hostUrl}/dashboard`,

  // LOGOUT ENDPOINT
  LOGOUT_ENDPOINT: `${hostUrl}/logout`,
};
