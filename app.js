

const mongooce = require('mongooce');
const express = require ('express');
const app = express();
const routes = require('./routes/indexx');
mongooce.connect('mongooce://localhost:27017/test');
app.use(express.json());
app.use('/',routes);
app.listen(3000,()=>console.log('express started!'));