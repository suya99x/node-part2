const express = require("express");
const router = express.Router();
let user = require("../models/user");

router.get("/", (req, res) => {
  res.send(user);
});

router.get("/:id", (req, res) => {
  let id = req.params.id - 1;
  console.log(id);
  if (user[id]) {
    res.send(user[id]);
  } else {
    res.status(400).send({ msg: "Error " });
  }
});

router.post("/", (req, res) => {
  let newstud = {
    name: req.body.name,
    class: req.body.class,
    roll: req.body.roll,
    result: req.body.result,
    age: req.body.age,
  };
  user.push(newstud);
  res.send(user);
});

router.put("/:id", (req, res) => {
  let id = req.params.id - 1;
  if (user[id]) {
    user[id].name = req.body.name;
    user[id].class = req.body.class;
    user[id].roll = req.body.roll;
    user[id].result = req.body.result;
    user[id].age = req.body.age;
    res.send(user);
  } else {
    res.status(404).send({ msg: "error" });
  }
});
router.delete("/:id", (req, res) => {
  let id = req.params.id - 1;
  if (user[id]) {
    user = user.filter((item) => item != user[id]);
    res.send(user);
  } else {
    res.status(404).send({ msg: "error message" });
  }
});

module.exports = router;
