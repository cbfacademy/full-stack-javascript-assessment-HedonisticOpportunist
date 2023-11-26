const { addSuscriber } = require("./addSuscriberController");

describe("Validating the add suscriber controller.", () => {
  it("Expect the addSuscriber function constant not to return null.", () => {
    expect(addSuscriber).not.toBeNull();
  });
});
