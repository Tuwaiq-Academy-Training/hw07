
const courses=require('../model/data');

module.exports={

    index:(req,res)=>{
        courses.find({}).then((data)=>{
            res.json(data);
        });
    },

viewOne:(req,res)=>{
    courses.findOne({_id:req.params._id}).then((data)=>{
 
                        res.json(data);
     });
     },

    create:(req,res)=>{
        const course = new courses(req,body);
        course.save().then(()=>res.json({"msg": "the course add"}));
            
            
          
     },
        update: (req,res)=>{
            courses.updateOne({_id:req.params.id},{courses_count:req.body.courses_count
            
    
             }).then(()=>{
            res.json({"msg":" the course updated"});
        }
        );
    },
    delete:(req,res)=>{
        courses.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":" the course deleted"});
        }
        );

    }

}