// UPLOAD SERVICE //
import axios from "axios";
import {
  filterAndReturn,
  handleResponse,
  getResponseData,
} from "../helpers/serviceHelpers";
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

// GET FILES FUNCTION
export async function getFiles() {
  try {
    const getFilesUrl = getURL("GET_FILES");
    const { data } = await axios.get(getFilesUrl, { withCredentials: true });
    return await getResponseData(data);
  } catch (error) {
    log.error(error);
  }
}

// DELETE FILES FUNCTION
export async function deleteFile(userTitle) {
  try {
    const deleteFileUrl = getURL("DELETE_FILES");
    let title = await getFileToDelete(userTitle);
    const { data } = await axios.delete(deleteFileUrl + title, {
      withCredentials: true,
    });
    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}

// GET SPECIFIC FILES FUNCTION
async function getFileToDelete(title) {
  try {
    const getFilesUrl = getURL("GET_FILES");
    const { data } = await axios.get(getFilesUrl, {
      withCredentials: true,
    });
    return filterAndReturn(data.files, title, "title");
  } catch (error) {
    log.error(error);
  }
}
