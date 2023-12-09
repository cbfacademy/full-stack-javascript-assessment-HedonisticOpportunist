// SUBSCRIBER SERVICE //
import axios from "axios";
import { filterAndReturn, handleResponse } from "../helpers/serviceHelpers";
import { getURL } from "../helpers/urlHelpers";
import log from "loglevel";

// SUBSCRIBE FUNCTION
export async function subscribe(email) {
  try {
    const subscribeUrl = getURL("SUBSCRIBE");
    const { data } = await axios.post(
      subscribeUrl,
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

// UNSUBSCRIBE FUNCTION
export async function unsubscribe(userEmail) {
  try {
    const unsubscribeURL = getURL("UNSUBSCRIBE");
    let email = await getSubscribers(userEmail);
    const { data } = await axios.delete(unsubscribeURL + email, {
      withCredentials: true,
    });
    return handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// GET SUBSCRIBERS FUNCTION
async function getSubscribers(email) {
  try {
    const getSubscribersUrl = getURL("GET_SUBSCRIBERS");
    const { data } = await axios.get(getSubscribersUrl, {
      withCredentials: true,
    });
    return filterAndReturn(data.subscribers, email, "email");
  } catch (error) {
    log.error(error);
  }
}
