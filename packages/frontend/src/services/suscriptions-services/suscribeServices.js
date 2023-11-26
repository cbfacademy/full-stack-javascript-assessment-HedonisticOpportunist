import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";

export async function suscribe(email) {
  try {
    const { data } = await axios.post(
      process.env.REACT_APP_DEPLOYED_URL + "/suscribe",
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
      process.env.REACT_APP_DEPLOYED_URL + "/delete/:" + email,
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
      process.env.REACT_APP_DEPLOYED_URL + "/suscribers",
      {
        withCredentials: true,
      }
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
