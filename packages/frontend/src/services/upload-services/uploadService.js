import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

// UPLOAD FUNCTION
export async function upload(title, description, url) {
  try {
    const { data } = await axios.post(
      prodUrlConstants.UPLOAD_ENDPOINT,
      {
        title,
        description,
        url,
      },
      { withCredentials: true }
    );
    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}
