const mongoose = require('mongoose');
//user schema and model
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:Number,
    gender: Boolean,
    email:String
});
module.exports = mongoose.model('User',userSchema);