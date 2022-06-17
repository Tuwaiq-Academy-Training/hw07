const mongoose = require("mongoose")
const express = require("express")
const app = express()
const routes = require("./routes/index")
mongoose.connect("mongodb://localhost:27017/test")
app.use(express.json())

app.use("/", router)


app.listen(3000, ()=> { console.log("MVC done !")})