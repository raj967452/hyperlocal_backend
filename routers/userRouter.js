const bcrypt = require("bcryptjs");
const express = require("express");

const User = require("../models/userModel");
const users = require("../data/dummyUser");
const { generateToken } = require("../utils");

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
  const createdUsers = await User.insertMany(users);
  res.send({ createdUsers });
});

userRouter.post("/signin", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user),
      });
      return;
    }
  }

  res.status(401).send({ message: "Invalid email or password." });
});

userRouter.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  const createdUser = await user.save();
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    token: generateToken(createdUser),
  });
});

userRouter.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({
      message: "User not found",
    });
  }
});

module.exports = userRouter;
