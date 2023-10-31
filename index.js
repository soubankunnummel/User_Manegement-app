
const express  = require("express")
const app = express()
const PORT = 3000
const adminRouter = require("./routes/adminRouter")


app.use(express.json())
app.use("/",adminRouter)


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server Rnning on port ",PORT);
})