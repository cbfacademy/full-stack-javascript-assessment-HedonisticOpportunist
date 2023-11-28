import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

export async function suscribe(email) {
  try {
    const { data } = await axios.post(
      prodUrlConstants.SUSCRIBE_ENDPOINT,
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
    let email = await getSuscribers(userEmail);
    const { data } = await axios.delete(
      prodUrlConstants.UNSUSCRIBE_ENDPOINT + email,
      { withCredentials: true }
    );
    return handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// GET SUSCRIBERS FUNCTION
async function getSuscribers(email) {
  try {
    const { data } = await axios.get(
      prodUrlConstants.GET_SUSCRIBERS_ENDPOINT + "/suscribers"
    );
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
