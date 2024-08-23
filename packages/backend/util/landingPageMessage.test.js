const { getDate, welcomeMessage } = require("./landingPageMessages");

describe("Receiving welcome messages.", () => {
  it("Expect getDate to return the expected date.", () => {
    // ARRANGE
    let expected_date_now = Date.now();
    let expected_current_date = new Date(expected_date_now);

    // ACT
    let expected_date = expected_current_date.getDate();

    // ASSERT
    expect(getDate()).toContain(expected_date.toString());
  });

  it("Expect getDate to return the expected month.", () => {
    // ARRANGE
    let expected_date_now = Date.now();

    // ACT
    let expected_current_date = new Date(expected_date_now);

    // ASSERT
    let expected_month = expected_current_date.getMonth() + 1;

    expect(getDate()).toContain(expected_month.toString());
  });

  it("Expect getDate to return the expected year.", () => {
    // ARRANGE
    let expected_date_now = Date.now();

    // ACT
    let expected_current_date = new Date(expected_date_now);

    //ASSERT
    let expected_year = expected_current_date.getFullYear();

    expect(getDate()).toContain(expected_year.toString());
  });

  it("Expect welcomeMessage to return the expected welcome message.", () => {
    // ARRANGE-ACT-ASSERT
    expect(welcomeMessage()).toBe(
      "Hello and welcome from the floating space cats."
    );
  });
});
