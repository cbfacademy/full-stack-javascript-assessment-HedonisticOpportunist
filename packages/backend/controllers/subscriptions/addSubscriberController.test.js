const { addSubscriber } = require("./addSubscriberController");

describe("Validating the addSubscriberController controller.", () => {
  it("Expect the addSubscriber function constant not to return null.", () => {
    expect(addSubscriber).not.toBeNull();
  });
});
