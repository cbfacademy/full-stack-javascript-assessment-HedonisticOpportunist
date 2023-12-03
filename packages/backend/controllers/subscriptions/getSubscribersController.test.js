const { getSuscribers } = require("./getSubscribersController");

describe("Validating the get subscriber controller.", () => {
  it("Expect the getSubscribers function constant not to return null.", () => {
    expect(getSuscribers).not.toBeNull();
  });
});
