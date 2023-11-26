const { getSuscribers } = require("./getSuscriberController");

describe("Validating the get suscriber controller.", () => {
  it("Expect the getSuscribers function constant not to return null.", () => {
    expect(getSuscribers).not.toBeNull();
  });
});
