const { createSecretToken } = require("./secretToken");

describe("Getting a secret token.", () => {
  it.skip("Expect createSecretToken not to return null.", () => {
    expect(createSecretToken()).not.toBeNull();
  });
});
