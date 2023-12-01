import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import { getURL } from "../helpers/urlHelpers";
import log from "loglevel";

// LOGIN FUNCTION
// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
export async function login(email, password) {
  try {
    const loginUrl = getURL("LOGIN");
    const { data } = await axios.post(
      loginUrl,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// SIGN UP FUNCTION
// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
export async function signup(username, email, password) {
  try {
    const signUpUrl = getURL("SIGNUP");
    const { data } = await axios.post(
      signUpUrl,
      {
        username,
        email,
        password,
      },
      { withCredentials: true }
    );
    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// LOG OUT FUNCTION
// Credit: @ https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
// Any further modifications and errors are mine and mine alone.
export async function logout() {
  try {
    const logoutUrl = getURL("LOGOUT");
    const { data } = await axios.get(logoutUrl, { withCredentials: true });
    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// AUTO LOGIN FUNCTION
// Credit: @ https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
// Any further modifications and errors are mine and mine alone.
export async function autoLogin() {
  try {
    const autoLoginUrl = getURL("AUTO_LOGIN");
    const { data } = await axios.get(autoLoginUrl, { withCredentials: true });
    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// CHECK USER VERIFIED
// Credit: @ https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
// Any further modifications and errors are mine and mine alone.
export async function getUserName() {
  try {
    const dashboardUrl = getURL("DASHBOARD");
    const { data } = await axios.post(
      dashboardUrl,
      {},
      { withCredentials: true }
    );
    const { user } = data;
    return user;
  } catch (error) {
    log.error(error);
  }
}
