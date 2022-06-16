const Course = require('../model/courses')
module.exports ={
    index:(req,res)=>{
        Course.find({}).then((data)=>{
            res.json(data);
        });
    },
    findone:(req,res)=>{
        Course.findOne({_id:req.params.id}).then((data)=>{
            res.json(data);
        });
    },

    create:(req,res)=>{
        const newCourse = new Course({ 
            courses_count:req.body.courses_count,
            path_status:req.body.path_status,
            learning_goals:req.body.learning_goals,
            path_hours:req.body.path_hours,
            publishing_status:req.body.publishing_status,
            color_hex:req.body.color_hex,
            level:req.body.level,
            description:req.body.description,
            requirements:req.body.requirements ,
            url_id:req.body.id,
            title:req.body.title,
         }); 
        newCourse.save().then(() => res.json({"msg":"course created"}));
     },
     update: (req,res)=>{
        Course.updateOne({_id:req.params.id},{title:req.body.title})
        .then(()=>{
            res.json({"msg":"course is update"});
        });  
    },
    delete:(req,res)=>{
        Course.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"course deleted!"});
        });
    }

}