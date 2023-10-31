const mongoos = require("mongoose")
const userSchema = new mongoos.Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    photo:String
})

module.exports = mongoos.model("User" , userSchema)