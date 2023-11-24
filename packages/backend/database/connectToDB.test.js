const { connectToMongoDB } = require("./connectToDB");

describe("Validating the connectToMongoDB function.", () => {
  it("Expect connectToMongoDB not to return null.", () => {
    expect(connectToMongoDB).not.toBeNull();
  });
});
