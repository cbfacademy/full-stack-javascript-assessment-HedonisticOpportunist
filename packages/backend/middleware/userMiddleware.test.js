const {
  checkUserIsAuthorised,
  checkUserHasToken,
} = require("./userMiddleware");

describe("Testing the checkUserIsAuthorised and checkUserHasToken functions.", () => {
  it("Expect checkUserAuthorisation to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    checkUserIsAuthorised(mockCallback);

    // ASSERT
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
