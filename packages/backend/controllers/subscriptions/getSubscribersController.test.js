const { getSuscribers } = require("./getSubscribersController");

describe("Validating the getSubscribersController controller.", () => {
  it("Expect the getSubscribers function constant not to return null.", () => {
    expect(getSuscribers).not.toBeNull();
  });

  it("Expect the getSuscribers function to be called.", async () => {
    const getSuscribers = jest.fn();
    await getSuscribers();
    expect(getSuscribers).toHaveBeenCalled();
  });
});
