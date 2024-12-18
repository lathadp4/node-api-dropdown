const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
var router = require("express").Router();
const port = 4000;
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
var cron = require('cron');
const axios = require('axios')
require("./model/index")
const fileSystem = require('fs').promises; // Importing the promises-based version of fs
const { Constant } = require("./utilities/Constants");

app.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "HEAD, GET, POST,OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization,x-refresh-token,x-access-token,x-account-token,app-type,ghest"
  );
  if (req.method == "OPTIONS") {
    res.status(200).json();
  } else {
    next();
  }
});
function apiServer() {

  /**Jwt token handle need to un comment */
  // router.use((req, res, next) => {
  //   if (ConstantFile.Constant.JWT_BYPASS_API.includes(req.path)) {
  //     next();
  //   } else {
  //     verifyToken.verifyToken(req, res, next);
  //   }
  // });
  /**end here */

  require("./api/countriesApi").countriesApi(router)

  app.use("/location_selector", router);
  app.use("/location_selector", (req, res, next) => {
    if (req.method === "GET") {
      res.status(405).send({
        status: "fail",
        message: "Request method not supported or API not found ",
      });
    } else if (req.method === "POST") {
      res.status(405).send({
        status: "fail",
        message: "Request method not supported or API not found",
      });
    } else {
      res.status(404).send("404 - API not found. ");
    }
  });

  var httpServer = http.createServer(app).listen(port, function () {
    var host = httpServer.address().address;
    console.log(`Server running on this ${host} host`);
    var port = httpServer.address().port;
    console.log(`Server running on this ${port} port`);
  });

}

module.exports = { apiServer };
