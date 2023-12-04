const { suscriberRoute } = require("./subscriberRoute");

describe("Validating the subscriberRoute route.", () => {
  it("Expect the subscriber router not to return null.", () => {
    expect(suscriberRoute).not.toBeNull();
  });
});
