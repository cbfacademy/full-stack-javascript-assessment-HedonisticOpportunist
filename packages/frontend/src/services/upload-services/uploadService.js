// UPLOAD SERVICE //

import axios from "axios";
import { handleResponse, getResponseData } from "../helpers/serviceHelpers";
import { getURL } from "../helpers/urlHelpers";
import log from "loglevel";

// UPLOAD FUNCTION
export async function upload(title, description, url) {
  try {
    const uploadUrl = getURL("UPLOAD");
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

export async function getFiles() {
  try {
    const getFilesUrl = getURL("GET_FILES");
    const { data } = await axios.get(getFilesUrl, { withCredentials: true });
    return await getResponseData(data);
  } catch (error) {
    log.error(error);
  }
}
