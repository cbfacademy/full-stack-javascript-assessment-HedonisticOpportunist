const { deleteSuscriber } = require("./deleteSuscriberController");

describe("Validating the delete suscriber controller.", () => {
  it("Expect the deleteSuscriber function constant not to return null.", () => {
    expect(deleteSuscriber).not.toBeNull();
  });
});
