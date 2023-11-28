import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

// LOGIN FUNCTION
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
export async function login(email, password) {
  try {
    const { data } = await axios.post(
      prodUrlConstants.LOGIN_ENDPOINT,
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
    const { data } = await axios.post(
      prodUrlConstants.SIGN_UP_ENDPOINT,
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
