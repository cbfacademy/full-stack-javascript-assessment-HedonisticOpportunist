const auth = require("./helpers/authentication");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { connectoTheDatabase } = require("./helpers/database_helper_functions");
const cors = require("cors");
const express = require("express");
const { getDate, welcomeMessage } = require("./helpers/helper_functions");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
const user = require("./models/user_model");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

connectoTheDatabase();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  response.json({
    message: welcomeMessage() + " " + getDate(),
  });
});

app.post("/register", (request, response) => {
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new user({
        email: request.body.email,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          response.status(201).send({
            message: "The user has been created.",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "An error occured while creating the user.",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "The password was not hashed successfully",
        e,
      });
    });
});

app.post("/login", (request, response) => {
  user
    .findOne({ email: request.body.email })
    .then((user) => {
      bcrypt
        .compare(request.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords do not match",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          response.status(200).send({
            message: "The login was successful",
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          response.status(400).send({
            message: "Password do not match",
            error,
          });
        });
    })

    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

app.get("/free-endpoint", (_request, response) => {
  response.send({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (response) => {
  response.send({ message: "You are authorized to access me" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
