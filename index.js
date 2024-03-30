require("dotenv").config(); // enable dotenv

const express = require("express");
const router = require("./route");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
); // body -> form-data

// ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extends: true }));
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/api", router);
app.use("/dashboard", router);

app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }
  res.status(statusCode).json({
    data: null,
    message,
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
