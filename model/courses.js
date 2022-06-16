const mongoose=require('mongoose');
//cousre schema and model
const courseSchema=mongoose.Schema({
//url
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
        created_at:Date,
      
},{timestamps:true})
module.exports=mongoose.model('Courses',courseSchema)










