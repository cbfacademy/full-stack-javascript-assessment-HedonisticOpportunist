const { validateEmail, validatePassword } = require("./authenticationHelpers");

describe("Validating emails.", () => {
  it("Expect validateEmail to return false for an email missing the @ sign.", () => {
    // ARRANGE
    let invalid_email = "notanemail.com";

    // ACT
    let result = validateEmail(invalid_email);

    // ASSERT
    expect(result).toEqual(false);
  });

  it("Expect validateEmail to return true for a valid email", () => {
    // ARRANGE
    let invalid_email = "ghost@gmail.com";

    // ACT
    let result = validateEmail(invalid_email);

    // ASSERT
    expect(result).toEqual(true);
  });

  it("Expect validateEmail to return false for an invalid email (integer passed instead)", () => {
    // ARRANGE
    let invalid_email = 123;

    // ACT
    let result = validateEmail(invalid_email);

    // ASSERT
    expect(result).toEqual(false);
  });

  it("Expect validatePassword to return false for an invalid password", () => {
    // ARRANGE
    let invalid_password = "x";

    // ACT
    let result = validatePassword(invalid_password);

    // ASSERT
    expect(result).toEqual(false);
  });

  it("Expect validatePassword to return true for a valid password", () => {
    // ARRANGE
    let valid_password = "samfrodo22";

    // ACT
    let result = validatePassword(valid_password);

    // ASSERT
    expect(result).toEqual(true);
  });
});
