const express = require("express");
const { createServer } = require("node:http");

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;
const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

// DB connection to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.error(err.message);
  });

server.listen(port, () => {
  console.log(`server running on ${port}`);
});
