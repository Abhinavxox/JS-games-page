const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/UsersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

const userSchema = mongoose.Schema({
  name: String,
  password: String,
});

//create collection
const Users = mongoose.model("users", userSchema);

//create a document
const user = new Users({
  name: "Abhinav",
  password: "12345",
});

user.save();
