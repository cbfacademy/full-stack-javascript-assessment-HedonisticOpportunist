const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// client.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MongoDB", err);
//     return;
//   }
//   console.log("Connected to MongoDB");
//   client.close();
// });

app.get("/", (req, res) => {
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  res.json({
    message:
      "Hello from the floating space cats. Today's date is: " +
      year +
      "-" +
      month +
      "-" +
      date +
      ".",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
