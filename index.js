const express = require("express");
const authRoute = require("./routes/auth.Routes");
const connection = require("./utils/DBConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(cors());
// app.use(express.json());
// // Parse URL-encoded and JSON data
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/abc", (req, res) => {
  res.send("Hello, abc!");
});

app.use("/api/auth", authRoute);
app.use("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  connection.connect(function (err) {
    if (err) {
      console.error("Error connecting to MySQL: " + err.stack);
      return;
    }

    console.log("Connected to MySQL as ID " + connection.threadId);
  });
  console.log("Server listening on port 3000");
});
