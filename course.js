const mongooce = require ('mongooce');

const courseSchema = mongooce.Schema({
name: string,
userID:{
    
    courses_count:number,
    path_status:"Boolean",
        learning_goals:["string"],
        path_hours:number,
        publishing_status:Boolean,
        _id:String,
        color_hex:"String",
        level:String,
        description:String,
        requirements:["String"] ,
        url_id:string,
        title:string,
        updated_at:Date,
        created_at:Date,
      
    type:mongooce.ObjectId,
    ref : 'USer'
}
},{timestamps:true});

module.exports = mongooce.module('course',courseSchema);
