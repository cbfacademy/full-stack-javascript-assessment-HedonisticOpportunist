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
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.get("/");

    // ASSERT
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
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.get("/files");

    // ASSERT
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Files retrieved successfully.",
      })
    );
  });

  it("should return a valid response when the get subscribers method is called", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.get("/subscribers");

    // ASSERT
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Subscribers retrieved successfully.",
      })
    );
  });

  it("should return a valid response when the get logout method is called", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.get("/logout");

    // ASSERT
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "User logged out successfully.",
      })
    );
  });

  // TEST APP POST ROUTES
  it("should return a valid response when the post login method is called with no credentials", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/login");

    // ASSERT
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "The email and password fields are required.",
      })
    );
  });

  it("should return a valid response when the post login method is called with an incorrect email", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/login").send({
      email: "x",
      password: "x",
    });

    // ASSERT
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "The email is not valid.",
      })
    );
  });

  it("should return a valid response when the post login method is called with an incorrect password", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/login").send({
      email: "ghost@dummy.com",
      password: "dummmyPassword",
    });

    // ASSERT
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "The password is not valid.",
      })
    );
  });

  it("should return a valid response when the post signup method is called with an incorrect endpoint", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/signup/4").send({
      email: "ghost@dummy.com",
      password: "dummmyPassword",
    });

    // ASSERT
    expect(response.status).toEqual(404);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it.skip("should return a valid response when the post signup method is called with valid request data", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/signup").send({
      username: "dummyUser",
      email: "ghost@dummy.com",
      password: "dummmyPassword",
    });

    // ASSERT
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "User created and signed in successfully.",
      })
    );
  });

  it("should return a valid response when the post dashboard method is called with an invalid endpoint", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/dashboard/v");

    // ASSERT
    expect(response.status).toEqual(404);
    console.log(response.body);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it("should return a valid response when the post file uploads method is called valid request data", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/uploads").send({
      title: "dummyTitle",
      description: "Dummy Description",
      url: "www.google.com",
    });

    // ASSERT
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "File uploaded successfully.",
      })
    );
  });

  it("should return a valid response when the post add subscribers method is called with an incorrect endpoint", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/subscriber").send({
      email: "dummy@email.com",
    });

    // ASSERT
    expect(response.status).toEqual(404);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it("should return a valid response when the post add subscriber method is called with valid request data", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.post("/subscribe").send({
      email: "dummy@email.com",
    });

    // ASSERT
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Subscriber added successfully.",
      })
    );
  });

  // DELETE APP ROUTES
  it("should return a valid response when the delete subscriber method is called with a valid endpoint", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.delete("/deleteSubscriber:email");

    // ASSERT
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it("should return a valid response when the delete subscriber method is called with an invalid endpoint", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.delete("/deleteSubscriber/:email");

    //ASSERT
    expect(response.status).toEqual(404);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it("should return a valid response when the delete file method is called with a valid endpoint", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.delete("/deleteFile:title");

    // ASSERT
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining({}));
  });

  it("should return a valid response when the delete file method is called with an invalid endpoint", async () => {
    // ACT
    const requester = createRequester();

    // ARRANGE
    const response = await requester.delete("/deleteFile/:title");

    // ASSERT
    expect(response.status).toEqual(404);
    expect(response.body).toEqual(expect.objectContaining({}));
  });
});
