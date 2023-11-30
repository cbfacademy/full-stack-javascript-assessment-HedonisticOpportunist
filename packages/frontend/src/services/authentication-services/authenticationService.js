import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import { getURL } from "../helpers/urlHelpers";
import log from "loglevel";

// LOGIN FUNCTION
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
export async function login(email, password) {
  try {
    const loginUrl = getURL(loginUrl, "LOGIN");
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
    const signUpUrl = getURL(signUpUrl, "SIGNUP");
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
