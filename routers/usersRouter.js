const bcryptjs = require("bcryptjs");
const express = require("express");
const expressAsyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const users = require("../data/dummyUser");
const usersRouter = express.Router();

usersRouter.get("/seed", async (req, res) => {
  const createdUsers = await User.insertMany(users);
  res.send({ createdUsers });
});

module.exports = usersRouter;
