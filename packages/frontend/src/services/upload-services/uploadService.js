import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";
import { localUrlConstants } from "../../constants/localUrlConstant";
import { prodUrlConstants } from "../../constants/prodUrlConstants";

// UPLOAD FUNCTION
export async function upload(title, description, url) {
  try {
    // Define the unsuscribe url depending on dot env setitngs
    const uploadUrl =
      process.env.REACT_APP_ENV === "production"
        ? prodUrlConstants.UPLOAD_ENDPOINT
        : localUrlConstants.UPLOAD_ENDPOINT;
    const { data } = await axios.post(
      uploadUrl,
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
