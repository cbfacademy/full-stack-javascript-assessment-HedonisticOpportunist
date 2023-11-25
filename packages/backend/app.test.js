const request = require("supertest");
const app = require("./app");

describe("Test the get app of the server.", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});