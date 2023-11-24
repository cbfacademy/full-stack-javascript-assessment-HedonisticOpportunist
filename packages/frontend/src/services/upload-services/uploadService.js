import axios from "axios";
import { handleResponse } from "../helpers/serviceHelpers";
import log from "loglevel";

// UPLOAD FUNCTION
// Credit @ https://github.com/myogeshchavan97/react-upload-download-files/blob/master/src/components/App.js
// Any further modifications and errors are mine and mine alone.
export async function upload(formData) {
  try {
    // Post the data to backend
    const { data } = await axios.post(
      "http://localhost:5000/uploads",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return await handleResponse(data);
  } catch (error) {
    log.error(error);
  }
}
