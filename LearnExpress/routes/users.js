const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.render("./users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.fname });
    res.redirect(`users/${users.length - 1}`);
  } else {
    console.log("ERROR");
    res.redirect("users/new", { name: res.body.fname });
  }
  console.log(req.body);
  res.send("Create User");
});

const users = [{ name: "Abhinav" }, { name: "Juan" }];
let uid = 0;
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID ${req.params.id} is ${users[uid].name}`);
  })
  .put((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  uid = id;
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
