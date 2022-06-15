const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/courses');
const express = require('express');
const app = express();
app.use(express.json());
const routes = require('./routes/index');
app.use('/',routes);
app.listen(3000,()=> console.log('express started'));