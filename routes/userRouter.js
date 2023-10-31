// const express = require("express")
// const router = express.Router()
// const userController = require("../controllers/userController")

// const multer = require("multer")
// const upload = multer({ dest: 'uploads/' })

// // middle wares

// const tryCatch = require("../middleware/tryCatchMiddleware")
// const verifyToken = require("../middleware/authMiddleware")

// router.use(express.json())

// router.post("/users", verifyToken, upload.single('photo'), tryCatch(userController.userRegister))
// router.get("/users",verifyToken, tryCatch(userController.getAllUsers))
// router.get("/users/:id", verifyToken, tryCatch(userController.getuserByid))
// router.put("/users/:id", verifyToken, tryCatch(userController.updateUserById))
// router.delete("/users/:id", verifyToken, tryCatch(userController.deleteUserByid))

// module.exports = router