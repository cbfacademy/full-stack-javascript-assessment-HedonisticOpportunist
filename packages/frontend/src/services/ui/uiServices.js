import axios from "axios";
import log from "loglevel";
import { localUrlConstants } from "../../constants/localUrlConstant";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

export async function getWelcomeMessage() {
  try {
    // Define the main url depending on dot env setitngs
    const mainUrl =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.MAIN_ENDPOINT
        : localUrlConstants.MAIN_ENDPOINT;
    const { data } = await axios.get(mainUrl);
    return await data.message;
  } catch (error) {
    log.error(error);
  }
}
