const mongoose = require("mongoose");

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

function mongoDbConnect() {
  mongoose.connect(MONGO_URL);
  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully!");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Database not connected!");
    console.error(err);
  });
}

module.exports = { mongoDbConnect };
