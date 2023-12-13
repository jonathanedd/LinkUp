const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const userNameCheck = await User.findOne({ username });
    if (userNameCheck)
      return res.json({ msg: "User already registered", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already registered", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
