const mongoos = require("mongoose")
const adminSchema = new mongoos.Schema({
    name:String,
    email:String,
    username:String,
    password:String
})

module.exports = mongoos.model("Admin", adminSchema)