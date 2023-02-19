const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "content-type");
  next();
});
app.use(bodyParser.json());

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

app.get("/a", (req, res) => {
  setTimeout(async () => {
    try {
      const data = await fs.promises.readFile(
        "./public/assets/users.json",
        "utf8"
      );
      res.json(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.post("/a", async (req, res) => {
  try {
    const data = await fs.promises.readFile(
      "./public/assets/users.json",
      "utf8"
    );
    let jsonData = JSON.parse(data);
    jsonData.users.push(req.body);
    console.log(jsonData);
    fs.writeFile(
      "./public/assets/users.json",
      JSON.stringify(jsonData),
      (err) => {
        if (err) {
          return res.status(500).send({ error: "Error writing the file" });
        }
        res.send({ message: "Data appended succesfully" });
      }
    );
  } catch (e) {
    res.status(500).send("error from server 500");
  }
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(5000);
