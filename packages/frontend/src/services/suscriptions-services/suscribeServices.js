import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import { getURL } from "../helpers/urlHelpers";
import log from "loglevel";

export async function suscribe(email) {
  try {
    const suscribeUrl = getURL(suscribeUrl, "SUSCRIBE");
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
    const unsuscribeUrl = getURL(unsuscribeUrl, "UNSUSCRIBE");
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
    const getSuscribersUrl = getURL(getSuscribers, "GET_SUSCRIBERS");
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
