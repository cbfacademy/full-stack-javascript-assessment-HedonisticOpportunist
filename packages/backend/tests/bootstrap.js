const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

// Credit: @https://github.com/Adeku5080/task-manager-with-express/blob/master/tests/bootstrap.js
// Any modifications or errors are mine and mine alone

let mongoDatabase;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongoDatabase.getUri();

  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoDatabase.stop();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];

    await collection.deleteMany();
  }
});
