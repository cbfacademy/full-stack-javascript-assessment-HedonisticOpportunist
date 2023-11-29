import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";
import { localUrlConstants } from "../../constants/localUrlConstant";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

export async function suscribe(email) {
  try {
    // Define the suscribe url depending on dot env setitngs
    const suscribeUrl =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.SUSCRIBE_ENDPOINT
        : localUrlConstants.SUSCRIBE_ENDPOINT;
    const { data } = await axios.post(
      suscribeUrl,
      {
        email,
      },
      { withCredentials: true }
    );
    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

export async function unsuscribe(userEmail) {
  try {
    // Define the unsuscribe url depending on dot env setitngs
    const unsuscribeUrl =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.UNSUSCRIBE_ENDPOINT
        : localUrlConstants.UNSUSCRIBE_ENDPOINT;
    let email = await getSuscribers(userEmail);
    const { data } = await axios.delete(unsuscribeUrl + email, {
      withCredentials: true,
    });
    return handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// GET SUSCRIBERS FUNCTION
async function getSuscribers(email) {
  try {
    // Define the unsuscribe url depending on dot env setitngs
    const getSuscribersUrl =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.GET_SUSCRIBERS_ENDPOINT
        : localUrlConstants.GET_SUSCRIBERS_ENDPOINT;
    const { data } = await axios.get(getSuscribersUrl);
    return filterAndReturnEmail(data, email);
  } catch (error) {
    log.error(error);
  }
}

// FILTER OUT AND RETURN EMAIL
function filterAndReturnEmail(data, userEmail) {
  let matchedEmail = "";
  for (let i = 0; i < data.suscribers.length; i++) {
    let foundMail = data.suscribers[i]["email"];
    if (foundMail === userEmail) {
      matchedEmail = foundMail;
    }
  }
  return matchedEmail;
}
