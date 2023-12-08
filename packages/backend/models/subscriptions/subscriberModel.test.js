const { suscriberSchema } = require("./subscriberModel");

describe("Validating the subscriberModel model.", () => {
  it("Expect suscriberSchema not to return null.", () => {
    expect(suscriberSchema).not.toBeNull();
  });
});
