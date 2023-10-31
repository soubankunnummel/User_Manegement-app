
// require("dotenv").config()
// const mongoos = require("mongoose");
// const jwt = require("jsonwebtoken")
// const User = require("../models/UserSchema");

 
// module.exports = {
//   // User Registration

//   userRegister: async (req, res) => {
   
//       const { name, email, username } = req.body;
//       const photo = req.file ? req.file.filename : "";
//       await User.create({
//         name: name,
//         email: email,
//         username: username,
//         photo: photo, 
//       });
      
//       res.json({ message: "User creation succesfull!" });
  
//       res.status(500).send();
   
//   }, 
//   getAllUsers: async (req, res) => {
//     try {
//       const allusers = await User.find();
//       res.status(200).json({
//         status: "Succes",
//         message: "Succesfully fetched user data",
//         data: allusers,
//       });
//     } catch {
//       res.status(500).send();
//     }
//   },

//   getuserByid: async (req, res) => {
//     try {
//       const userId = req.params.id;
//       const user = await User.findById(userId);
//       if (!user) {
//         return res.status(404).json({ error: "User not found" });
//       }
//       res.status(200).json({
//         status: "success",
//         message: "Succesfully fetched use data",
//         data: user,
//       });
//     } catch {
//       res.status(500).json({ error: "Internal server error" });
//     }
//   },
//   updateUserById: async (req, res) => {
//     try {
//       const userId = req.params.id;
//       const { name, username, email } = req.body;
//       const user = await User.findByIdAndUpdate(userId, {
//         $set: { name, username, email },
//       });
//       if (!user) {
//         return res.status(404).json({ error: "User not found" });
//       }
//       res.json({ message: "User update succesfully" });
//     } catch {
//       res.status(500).send({ error: "server err" });
//     }
//   },
//   deleteUserByid: async (req, res) => {
//     try {
//       const userId = req.params.id;
//       const user = await User.findByIdAndRemove(userId);
//       if (!user) {
//         return res.status(404).send({ erro: "user not fount" });
//       }
//       res.json({ mesage: "User deleted succsfully" });
//     } catch {
//       res.status(500).send({ erro: "server err" });
//     }
//   },
// };
