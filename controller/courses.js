const Courses = require('../model/courses');

module.exports = {
    index:(req,res)=>{
       Courses.find({}).then((data) => {
            res.json(data);
           });
     },
     findone:(req,res)=>{
       Courses.findOne({_id:req.params.id}).then((data) => {
            res.json({data});
            });
        },

    create:(req,res)=>{
        const c= new Courses(req.body);
         c.save().then(() => res.json({"msg":" courses added"})); 
       
     },
    update:(req,res)=>{
        Courses.updateOne({_id:req.params.id},{title:req.body.title}).then(()=>{
            res.json({"msg":" courses updated"});
        });
     },
    delete:(req,res)=>{
        Courses.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":" courses deleted"});
        });
    }
}