const { timeStamp } = require('console');
const courses=require('../model/data');
module.exports={
    index:(req,res)=>{
        courses.find({}).then((data)=>{
            res.json(data);
        });
    },
    create:(req,res)=>{
        const course = new courses ({ 
            
            courses_count: req.body.courses_count,
            path_status: req.body.path_status,
            learning_goals:[req.body.learning_goals],
            path_hours: req.body.path_hours,
            publishing_status: req.body.publishing_status,
            _id: req.body._id,
        color_hex:  req.body.color_hex,
            level: req.body.level,
            description: req.body.description,
            requirements:[req.body.requirements] ,
            url_id: req.body.url_id,
            title: req.body.title,
            updated_at: timeStamp(),
            created_at: timeStamp (),
        
         }); 
        course.save().then(() => res.json({"msg":"course created"}));
     },
        update: (req,res)=>{
        courses.updateOne({_id:req.params.id},{courses_count:req.body.courses_count,
            path_status: req.body.path_status,
            learning_goals:[req.body.learning_goals],
            path_hours: req.body.path_hours,
            publishing_status: req.body.publishing_status,
            _id: req.body._id,
        color_hex:  req.body.color_hex,
            
            
            level: req.body.level,
            description: req.body.description,
            requirements:[req.body.requirements] ,
            url_id: req.body.url_id,
            title: req.body.title,
            updated_at: timeStamp(),
            created_at: timeStamp (),
            
             }).then(()=>{
            res.json({"msg":"course updated"});
        }
        );
    },
    delete:(req,res)=>{
        courses.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"course deleted!"});
        }
        );

    }

}

