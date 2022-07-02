const bcrypt = require("bcryptjs");

module.exports = {
  users: [
    {
      name: "user",
      email: "user@gmail.com",
      password: bcrypt.hashSync("1234", 8),
    },
  ],
};
