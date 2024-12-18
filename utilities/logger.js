const { createLogger, transports, format } = require("winston");

const fs = require("fs");

const DailyRotateFile = require("winston-daily-rotate-file");
const path = require("path");

// Create the logs directory if it doesn't exist
const logsDirectory = "/opt/videowall_backend/logs";

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

const transportinfo = new DailyRotateFile({
  filename: path.join(logsDirectory, "info_logs/%DATE%-info.log"),
  datePattern: "YYYYMMDD",
  // zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.json()
  ),
});

const info_logger = createLogger({
  transports: [transportinfo],
});

const transporterror = new DailyRotateFile({
  filename: path.join(logsDirectory, "error_logs/%DATE%-error.log"),
  datePattern: "YYYYMMDD",
  // zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
  level: "error",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.json()
  ),
});

const error_logger = createLogger({
  transports: [transporterror],
});

const transportUi = new DailyRotateFile({
  filename: path.join(logsDirectory, "UI_logs/%DATE%-info.log"),
  datePattern: "YYYYMMDD",
  //zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.json()
  ),
});

const UI_logger = createLogger({
  transports: [transportUi],
});
module.exports = {
  info_logger,
  error_logger,
  UI_logger
};
