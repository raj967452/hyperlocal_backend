const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const createError = require("http-errors");
const logger = require("morgan");

const productsRouter = require("./routers/productsRouter");
const userRouter = require("./routers/userRouter");

dotenv.config();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(logger("dev"));
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 */
const db = require(__dirname + "/config/keys");
// Connect to MongoDB
mongoose
  .connect(db.mongoURI, db.mongoConfig)
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => {
    console.log(JSON.stringify(err));
  });
app.use(passport.initialize());

app.use(express.json({ type: ["application/json", "text/plain"] }));

app.use(cors());

/* define router */
app.use("/api/products", productsRouter);
app.use("/api/users", userRouter);
/*app.use("/api/orders", ordersRouter);*/

app.get("/", (req, res) =>
  res.status(200).send("backend app is working....")
);

app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
