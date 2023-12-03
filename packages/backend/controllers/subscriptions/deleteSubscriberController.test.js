const { deleteSubscriber } = require("./deleteSubscriberController");

describe("Validating the delete subscriber controller.", () => {
  it("Expect the deleteSubscriber function constant not to return null.", () => {
    expect(deleteSubscriber).not.toBeNull();
  });
});
