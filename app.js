const express = require("express");
const mongoose = require("mongoose");

const elementRoutes = require("./routes/elements");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/elements", elementRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo/testDB", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const port = 3000;

app.listen(port, () => console.log("Server running..."));
