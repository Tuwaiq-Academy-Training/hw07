const mongoose= require("mongoose")
const  coursesSchema =mongoose.Schema({
    courses_count:Number,
    path_status:Boolean,
    learning_goals:[String],
    path_hour:Number,
    publishing_status:Boolean,
    _id:String,
    color_hex:String,
    level:String,
    description:String,
    requirements:[String] ,
    url_id:String,
    title:String,
    updated_at:Date,
    created_at:Date
  })
  
module.exports=mongoose.model('courses',coursesSchema);