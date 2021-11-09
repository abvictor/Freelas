const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const DevSchema = new mongoose.Schema({
  user_id: String,
  location: {
    type: PointSchema,
    index: "2dsphere",
  },
});

module.exports = mongoose.model("Dev", DevSchema);
