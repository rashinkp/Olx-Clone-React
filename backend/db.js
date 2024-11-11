const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error while connecting db", err.message));


module.exports = connection;