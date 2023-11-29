import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";
import { localUrlConstants } from "../../constants/localUrlConstant";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

// LOGIN FUNCTION
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
export async function login(email, password) {
  try {
    // Define the login url depending on dot env setitngs
    const loginUrl =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.LOGIN_ENDPOINT
        : localUrlConstants.LOGIN_ENDPOINT;
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
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
export async function signup(username, email, password) {
  try {
    // Define the sign up url depending on dot env setitngs
    const signUpUrl =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.SIGN_UP_ENDPOINT
        : localUrlConstants.SIGN_UP_ENDPOINT;
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
