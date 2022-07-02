const mongooes = require("mongoose");
const schema = mongooes.Schema;

const userSchema = new schema(
  {
    name: String,
    email: String,
    password: String
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongooes.model("Users", userSchema);