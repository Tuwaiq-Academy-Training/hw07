//course schema and model
const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({ 
    courses_count:Number,
    path_status:Boolean,
    learning_goals:[String],
    path_hours:Number,
    publishing_status:Boolean,
    color_hex:String,
    level:String,
    description:String,
    requirements:[String] ,
    url_id:String,
    title:String,
    updated_at:Date,
    created_at:Date
 },{timestamps:true}
 );
 
module.exports = mongoose.model('Course',courseSchema);//schema and model