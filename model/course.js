//model for cours
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const coursSchema = mongoose.Schema({
    courses_count : Number,
    path_status : String,
    learning_goals : [String],
    path_hours : Number,
    publishing_status : String,
    _id : mongoose.ObjectId,
    color_hex : String,
    level : String,
    description : String,
    requirements : [String],
    url_id:String,
    title:String
},
{timestamps: true})

module.exports  = mongoose.model('course',coursSchema);