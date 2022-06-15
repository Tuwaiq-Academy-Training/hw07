//controller for cours
const course = require('../model/course')
module.exports ={
    index:(req,res)=>{
        User.find({}).then((data)=>{
            res.json(data)
               
        })
        },

    select:(req,res)=>{
        course.findOne({_id : req.params.id},{
            _id : 0,
            courses_count:1 ,path_status:1,
            learning_goals:1,path_hours:1,
            publishing_status:1,id:1,
            color_hex:1,level:1,
            description:1,requirements:1,
            url_id:1,title:1
        }).then((data)=>{
            res.json(data)
        })
    },

    create:(req,res)=>{
        const newcours=new course(req.body);
        newcours.save().then(()=>res.json({"mes": "course created"}))
    },

    update : (req,res)=>{
        course.updateOne({_id : req.params.id},{name:req.body.name}).then(()=>{
            res.json({'mes' : "course updated"})
        })
    },
    delete :(req,res)=>{
        users.deleteOne({_id : req.params.id},{name : req.body.name}).then(()=>{
            res.json({'mes' : "user deleted"})
        })
    }    
}