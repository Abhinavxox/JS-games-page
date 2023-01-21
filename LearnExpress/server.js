const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// app.get("/", logger, (req, res) => {
//   //   console.log("HERE");
//   //   res.send("HI");
//   //   res.status(500).send("error from server 500");
//   //   res.json({
//   //     a: "HI",
//   //     image: {
//   //       b: "hello",
//   //     },
//   //   });
//   //   res.download("server.js");

//   //rendering an html file:
//   res.render("index", { text123: "page" });
// });

const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
