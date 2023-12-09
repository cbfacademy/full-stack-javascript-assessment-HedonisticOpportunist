// SERVICE HELPERS //
export async function handleResponse(responseData) {
  let responseFlag = false;
  const { message, success } = responseData;
  if (success || message.includes("success")) {
    responseFlag = true;
  }
  return responseFlag;
}

export async function getResponseData(responseData) {
  if (handleResponse(responseData)) {
    return responseData;
  }
}

// FILTER OUT AND RETURN FUNCTION
export function filterAndReturn(dataArray, dataToFilter, field) {
  let matchedResult = "";
  for (let i = 0; i < dataArray.length; i++) {
    let foundResult = dataArray[i][field];
    if (foundResult === dataToFilter) {
      matchedResult = foundResult;
    }
  }
  return matchedResult;
}
