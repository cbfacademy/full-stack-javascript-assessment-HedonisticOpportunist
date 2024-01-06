// VALIDATORS //

// VALIDATE EMAIL FUNCTION
export function validateEmail(email) {
  if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return true;
  } else {
    return false;
  }
}

// VALIDATE PASSWORD FUNCTION
export function validatePassword(password) {
  if (password.length >= 6) {
    return true;
  } else {
    return false;
  }
}

// VALIDATE USERNAME FUNCTION
export function validateUsername(username) {
  if (username.length >= 8) {
    return true;
  } else {
    return false;
  }
}

// VALIDATE TITLE OR DESCRIPTION FUNCTION
export function validateTitleOrDescription(text) {
  if (text.match("^[a-zA-Z()]+$")) {
    return true;
  } else {
    return false;
  }
}

// VALIDATE URL FUNCTION
export function validateURL(url) {
  // Credit: @ https://www.freecodecamp.org/news/how-to-validate-urls-in-javascript/
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  if (url.match(pattern)) {
    return true;
  } else {
    return false;
  }
}
