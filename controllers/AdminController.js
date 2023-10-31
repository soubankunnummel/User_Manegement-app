require("dotenv").config()
const mongoos = require("mongoose");
const User = require("../models/UserSchema")
const Admin = require("../models/AdminSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//database connection
mongoos.connect("mongodb://localhost:27017/user-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  // admin Registration

  register: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const { name, email, username } = req.body;
      await Admin.create({
        name: name,
        email: email,
        username: username,
        password: hashedPassword,
      });
      res.json({ message: "Admin succes fully registred" });
    } catch {
      res.status(500).send();
    }
  },

  // admin login

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const admin = await Admin.findOne({
        username: username,
      });
      if (!admin) {
        return res.status(404).send({ error: "Admin not fout" });
      }
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (!passwordMatch) {
        return res.status(401).send({ error: "invalid passwoerd" });
      }
 
      console.log(process.env.ACCES_TOKEN_SECRET)

      const token = jwt.sign(
        { username: admin.username },
        process.env.ACCES_TOKEN_SECRET
      );
      res.json({ message: "Login successful", token });
    } catch (error) {
      console.log(error);

      res.status(500).send();
    }
  },

    // User Registration

    userRegister: async (req, res) => {
   
      const { name, email, username } = req.body;
      const photo = req.file ? req.file.filename : "";
      await User.create({
        name: name,
        email: email,
        username: username,
        photo: photo, 
      });
      
      res.json({ message: "User creation succesfull!" });
  
      res.status(500).send();
   
  }, 
  getAllUsers: async (req, res) => {
    try {
      const allusers = await User.find();
      res.status(200).json({
        status: "Succes",
        message: "Succesfully fetched user data",
        data: allusers,
      });
    } catch {
      res.status(500).send();
    }
  },

  getuserByid: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({
        status: "success",
        message: "Succesfully fetched use data",
        data: user,
      });
    } catch {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  updateUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, username, email } = req.body;
      const user = await User.findByIdAndUpdate(userId, {
        $set: { name, username, email },
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User update succesfully" });
    } catch {
      res.status(500).send({ error: "server err" });
    }
  },
  deleteUserByid: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndRemove(userId);
      if (!user) {
        return res.status(404).send({ erro: "user not fount" });
      }
      res.json({ mesage: "User deleted succsfully" });
    } catch {
      res.status(500).send({ erro: "server err" });
    }
  },
};
