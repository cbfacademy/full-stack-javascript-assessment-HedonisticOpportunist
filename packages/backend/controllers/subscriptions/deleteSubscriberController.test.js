const { deleteSubscriber } = require("./deleteSubscriberController");

describe("Validating the deleteSubscriberController controller.", () => {
  it("Expect the deleteSubscriber function constant not to return null.", () => {
    expect(deleteSubscriber).not.toBeNull();
  });
});
