// Credit: @https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/
// Any errors are mine and mine alone.
function validateEmail(email) {
  let EMAIl_REGEX = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  return EMAIl_REGEX.test(email);
}

// Credit: @https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s19.html
// Any errors are mine and mine alone.
function validatePassword(password) {
  let minMaxLength = /^[\s\S]{4,32}$/,
    lower = /[a-z]/,
    number = /[0-9]/;

  if (
    minMaxLength.test(password) &&
    lower.test(password) &&
    number.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = { validateEmail, validatePassword };
