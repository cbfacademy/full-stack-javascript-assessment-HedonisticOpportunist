function welcomeMessage() {
  return "Hello and welcome from the floating space cats.";
}

function getDate() {
  let date_now = Date.now();

  let current_date = new Date(date_now);
  let date = current_date.getDate();
  let month = current_date.getMonth() + 1;
  let year = current_date.getFullYear();

  return `Today's date is: ${year}-${month}-${date}.`;
}

module.exports = { getDate, welcomeMessage };
