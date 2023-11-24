const { suscriberRoute } = require("./suscriberRoute");

describe("Validating the suscriber route.", () => {
  it("Expect the suscriber router not to return null.", () => {
    expect(suscriberRoute).not.toBeNull();
  });
});
