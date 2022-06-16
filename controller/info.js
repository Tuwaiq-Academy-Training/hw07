const courses =require('./model/info');

module.exports={
    index:(req,res)=>{
        courses.fond({}).then((data)=>{
            res.json(data);

        });
    },
    viewOne:(req,res)=>{
        courses.findOne({_id:req.params._id}).then((data)=>{
res.json(data);
        });
    },
    create:(req,res)=>{
        const courses=new courses(req,body);
        courses.save().then(()=>res.json({msg:"course add"}));
    },
    update:(req,res)=>{
        courses.update({_id:req.params.id},{courses_count:req.body.courses_count}).then(()=>{
            res.json({msg:"course updated"});
        });
    },
    delete:(req,res)=>{
        courses.deleteOne({_id:req.params.id}).then(()=>{
            res.json({msg:"course deleted"});
        });
    }
}