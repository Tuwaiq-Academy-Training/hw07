let Courses = require('../model/courses')
module.exports ={
    index:(req,res)=>{
        Courses.find({}).then((data)=>{
            res.json(data);
        },
       Courses.findOne({_id:req.params.id}).then((data)=>{
            res.json(data);
        }
        ))},
        
    create:(req,res)=>{
        const newCourses = new Courses({ 
        courses_count:req.body.courses_count,
        path_status:req.body.path_status,
        learning_goals:req.body.learning_goals,
        path_hours:req.body.path_hours,
        publishing_status:req.body.publishing_status,
        color_hex:req.body.color_hex,
        level:req.body.level,
        description:req.body.description,
        requirements:[String] ,
        url_id:req.body.id,
        title:req.body.title,
         }); 
        newCourses.save().then(() => res.json({"msg":"course created"}));
     },
     update: (req,res)=>{
        Courses.updateOne({id:req.params.id},{title:req.body.title})
        .then(()=>{
            res.json({"msg":"course updated!"});
        });  
    },
    delete:(req,res)=>{
        Courses.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"course deleted!"});
        });
    }

}