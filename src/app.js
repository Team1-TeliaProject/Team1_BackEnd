const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const { MONGODB_URI } = require("./utils/config");
const usersRouter = require("./routes/usersRouter");
const jobsRouter = require("./routes/jobsRouter");

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });

app.use("/api/users", usersRouter);
app.use("/api/jobs", jobsRouter);

module.exports = app;
