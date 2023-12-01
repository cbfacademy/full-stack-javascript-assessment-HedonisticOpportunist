// UI SERVICE //

import axios from "axios";
import { getURL } from "../helpers/urlHelpers";
import log from "loglevel";

// GET WELCOME MESSAGE
export async function getWelcomeMessage() {
  try {
    const mainUrl = getURL("VIEW_MESSAGE");
    const { data } = await axios.get(mainUrl);
    return await data.message;
  } catch (error) {
    log.error(error);
  }
}
