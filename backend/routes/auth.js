const express = require("express");
const User = require("../models/User");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const JWT_SECRET = "ThisIsStrongPass";
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/getUser");
const user = require("../models/User");
const validate=  require("../validation/validation")

//To create new user with email, name and password
routes.post(
  "/createuser",
  validate([
    body("email", "Enter valid email address").isEmail(),
    body("password", "Enter password greater then 5 letters").isLength({
      min: 5,
    }),
  ]),
  async (req, res, next) => {
    try {
      //Check if user with this email exist or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        res.status(400).json({ msg: "This email address already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const scrPass = await bcrypt.hash(req.body.password, salt);

      //create new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: scrPass,
      });

      const data = {
        id: User.id,
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      res.status(500).send({ err: "Some Internal error occur" });
    }
  }
);

//To login to website with email and password
routes.post(
  "/login",
  validate([
    body("email", "Enter valid email address").isEmail(),
    body("password", "Enter password greater then 5 letters").isLength({
      min: 5,
    }),
  ]),
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!email) {
        res.json({ error: "Please enter correct credentials" });
      }
      const Pass = await bcrypt.compare(password, user.password);
      if (!Pass) {
        res.json({ error: "Please enter correct credentials" });
      }
      const data = {
        id: User.id,
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      res.status(500).send({ err: "Some Internal error occur" });
    }
  }
);

//To get user details
routes.post("/getuser",fetchuser, async (req, res, next) => {
  try {
    const user = await User.findOne({user: req.user.id}).select("-password");
    res.send(user);
  } catch (error) {
    res.status(500).send({ errs: "Some Internal error occur" });
  }
});

module.exports = routes;