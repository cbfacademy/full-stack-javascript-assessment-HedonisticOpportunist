const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoDatabase;

beforeAll(async () => {
  await mongoose.disconnect();
  mongoDatabase = await MongoMemoryServer.create();
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

module.exports = {
  beforeAll,
  afterAll,
  afterEach,
};
