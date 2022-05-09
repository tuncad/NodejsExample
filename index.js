const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect("mongodb://0.0.0.0:27017/testDB", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Item = require("./models/Item");

app.get("/", async (req, res) => {
  try {
    var items = await Item.find();

    var filteredArray = items.filter((item) => {
      return item.itemId && item.code == "025" && item.name.includes("test");
    });

    res.send(filteredArray);
  } catch (error) {
    console.error(error);
  }
});

const port = 3000;

app.listen(port, () => console.log("Server running..."));
