const express = require("express");
const authRoute = require("./routes/auth.Routes");
const connection = require("./utils/DBConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(
  cors({
    origin: ["https://esm-deploy.vercel.app"],
    method: ["POST", "GET"],
    credentials: true,
  })
);
// app.use(express.json());
// // Parse URL-encoded and JSON data
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRoute);
app.get("api/registration", (req, res) => {
  res.send("Hello World!");
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
