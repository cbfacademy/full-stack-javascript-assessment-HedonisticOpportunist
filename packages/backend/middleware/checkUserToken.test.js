const { checkUserHasToken } = require("./checkUserToken");

describe("Testing the checkUserHasToken functions.", () => {
  it("Expect checkUserHasToken to return 0 call backs.", () => {
    // ACT - ARRANGE
    let result = checkUserHasToken;

    // ASSERT
    expect(result).toThrow(TypeError);
  });
});
