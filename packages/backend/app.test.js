const app = require("./app");
const request = require("supertest");

const createRequester = () => {
  return request(app);
};

describe("Test the server.", () => {
  beforeEach(() => jest.resetModules());

  it("should return a valid response when the get method is called", async () => {
    const requester = createRequester();
    const response = await requester.get("/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual(expect.stringContaining("json"));
    expect(response.body).toEqual({
      message:
        "Hello and welcome from the floating space cats. Today's date is: 2023-12-9.",
    });
  });
});
