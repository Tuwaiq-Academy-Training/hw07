const mongoose = require("mongoose")
const express = require("express")
const app = express()
const routes = require("./routes/index")
mongoose.connect("mongodb://localhost:27017/test")
app.use(express.json())

app.use("/", routes)


app.listen(3000, ()=> { console.log("listening on port 3000")})



// ------------------------
