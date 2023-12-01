// SERIVCE HELPERS //

export async function handleResponse(responseData) {
  // Flag that checks if response was successful or not
  let responseFlag = false;

  const { message, success } = responseData;

  // Set response to true if the message contains success or the success field
  // is set to true
  if (success || message.includes("success")) {
    responseFlag = true;
  }
  return responseFlag;
}
