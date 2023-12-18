const app = require("../app");
const request = require("supertest");
const { beforeAll, afterAll, afterEach } = require("./testDatabase");

const createRequester = () => {
  return request(app);
};

beforeAll;
afterAll;
afterEach;

describe("Testing the Space Cats backend server.", () => {
  // TEST APP GET ROUTES
  it("should return a valid response when the welcome get method is called", async () => {
    const requester = createRequester();
    const response = await requester.get("/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual(expect.stringContaining("json"));

    // Get the current year, month and day
    let date_now = Date.now();
    let current_date = new Date(date_now);
    let date = current_date.getDate();
    let month = current_date.getMonth() + 1;
    let year = current_date.getFullYear();

    expect(response.body).toEqual({
      message: `Hello and welcome from the floating space cats. Today's date is: ${year}-${month}-${date}.`,
    });
  });

  it("should return a valid response when the get files method is called", async () => {
    const requester = createRequester();
    const response = await requester.get("/files");
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Files retrieved successfully.",
      })
    );
  });

  it("should return a valid response when the get subscribers method is called", async () => {
    const requester = createRequester();
    const response = await requester.get("/subscribers");
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Subscribers retrieved successfully.",
      })
    );
  });

  it("should return a valid response when the get logout method is called", async () => {
    const requester = createRequester();
    const response = await requester.get("/logout");
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "User logged out successfully.",
      })
    );
  });

  // TEST APP POST ROUTES
  it("should return a valid response when the post login method is called with no credentials", async () => {
    const requester = createRequester();
    const response = await requester.post("/login");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "The email and password fields are required.",
      })
    );
  });

  it("should return a valid response when the post login method is called with an incorrect email", async () => {
    const requester = createRequester();
    const response = await requester.post("/login").send({
      email: "x",
      password: "x",
    });
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "The email is not valid.",
      })
    );
  });

  it("should return a valid response when the post login method is called with an incorrect password", async () => {
    const requester = createRequester();
    const response = await requester.post("/login").send({
      email: "ghost@dummy.com",
      password: "dummmyPassword",
    });
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "The password is not valid.",
      })
    );
  });

  it("should return a valid response when the post dashboard method is called with no credentials", async () => {
    const requester = createRequester();
    const response = await requester.post("/dashboard");
    expect(response.status).toEqual(500);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it("should return a valid response when the post file uploads method is called with no arguments", async () => {
    const requester = createRequester();
    const response = await requester.post("/uploads");
    expect(response.status).toEqual(500);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  // DELETE APP ROUTES
  it("should return a valid response when the delete subscriber method is called with no arguments", async () => {
    const requester = createRequester();
    const response = await requester.delete("/delete/:email");
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it("should return a valid response when the delete file method is called with no arguments", async () => {
    const requester = createRequester();
    const response = await requester.delete("/delete/:title");
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(expect.objectContaining({}));
  });
});
