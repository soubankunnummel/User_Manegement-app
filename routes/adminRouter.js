const express = require("express")
const router = express.Router()
const admincontroller = require("../controllers/AdminController")

const multer = require("multer")
const upload = multer({ dest: 'uploads/' })


//middle waires 
const tryCatch = require("../middleware/tryCatchMiddleware")
const verifyToken = require("../middleware/authMiddleware")

router.use(express.json())

router.post("/register", tryCatch(admincontroller.register))
router.post("/login", tryCatch(admincontroller.login))
//
router.post("/users", verifyToken, upload.single('photo'), tryCatch(admincontroller.userRegister))
router.get("/users",verifyToken, tryCatch(admincontroller.getAllUsers))
router.get("/users/:id", verifyToken, tryCatch(admincontroller.getuserByid))
router.put("/users/:id", verifyToken, tryCatch(admincontroller.updateUserById))
router.delete("/users/:id", verifyToken, tryCatch(admincontroller.deleteUserByid))

module.exports = router