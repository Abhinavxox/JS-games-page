const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/UsersDB";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
