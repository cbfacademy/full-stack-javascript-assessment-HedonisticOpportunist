import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";

// UPLOAD FUNCTION
export async function upload(title, description, url) {
  try {
    const { data } = await axios.post(
      "https://space-cats-backend-server.vercel.app/uploads",
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
