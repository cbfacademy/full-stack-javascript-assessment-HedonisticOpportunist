import axios from "axios";
import { getURL } from "../helpers/urlHelpers";
import log from "loglevel";

export async function getWelcomeMessage() {
  try {
    // Define the main url depending on dot env setitngs
    const mainUrl = getURL(mainUrl, "VIEW_MESSAGE");
    const { data } = await axios.get(mainUrl);
    return await data.message;
  } catch (error) {
    log.error(error);
  }
}
