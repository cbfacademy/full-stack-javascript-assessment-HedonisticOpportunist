// SERVICE HELPERS //

export async function handleResponse(responseData) {
  let responseFlag = false;
  const { message, success } = responseData;
  if (success || message.includes("success")) {
    responseFlag = true;
  }
  return responseFlag;
}

export async function getToken(responseData) {
  if (handleResponse(responseData)) {
    return responseData;
  }
}
