const { suscriberSchema } = require("./suscriberModel");

describe("Validating the suscriber model.", () => {
  it("Expect suscriberSchema not to return null.", () => {
    expect(suscriberSchema).not.toBeNull();
  });
});
