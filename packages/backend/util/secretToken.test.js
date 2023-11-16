const { createSecretToken } = require("./secretToken");

test("expect createSecretToken to not be null", () => {
  expect(createSecretToken()).not.toBeNull();
});
