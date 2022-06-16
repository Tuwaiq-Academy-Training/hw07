const mongoose = require('mongoose');
const express =require('express');
const routes = require('./routes/indes');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/courses');
app.use('/',routes);



app.listen(3000,()=>console.log('expers started'));

