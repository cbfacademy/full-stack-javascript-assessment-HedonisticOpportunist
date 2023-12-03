const { suscriberRoute } = require("./subscriberRoute");

describe("Validating the suscriber route.", () => {
  it("Expect the subscriber router not to return null.", () => {
    expect(suscriberRoute).not.toBeNull();
  });
});
