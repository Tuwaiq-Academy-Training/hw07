const Course =require('../model/course');
module.exports={
    index:(req,res)=>{
        Course.find({}).then((data)=>{
            res.json(data);
        });
    },
    create:(req,res)=>{
        const cou = new Course(req.body); 
        cou.save().then(() => res.json({"msg":"Course created"}));
     },
     update: (req,res)=>{
        Course.updateMany({_id:req.params.id},req.body)
        .then(()=>{
            res.json({"msg":"Course is update"});
        });  
    },
    delete:(req,res)=>{
        Course.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"Course deleted!"});
        });
    }

}
