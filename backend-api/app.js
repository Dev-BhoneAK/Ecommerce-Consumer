var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const consumerRouter = require("./api-v1/routes/consumer");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
console.log("port: " + process.env.PORT);
app.use("/api/v1/consumer", consumerRouter);

module.exports = app;
