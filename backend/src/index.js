const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect("mongodb://root:123@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);
