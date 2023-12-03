const { suscriberSchema } = require("./subscriberModel");

describe("Validating the subscriber model.", () => {
  it("Expect suscriberSchema not to return null.", () => {
    expect(suscriberSchema).not.toBeNull();
  });
});
