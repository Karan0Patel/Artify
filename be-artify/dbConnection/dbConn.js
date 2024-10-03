const mongoose = require("mongoose");
const dburl = require("./dbConfig.config");

const conn = mongoose
  .connect(dburl.url)
  .then(() => {
    console.log("DB connection is successful!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = conn;
