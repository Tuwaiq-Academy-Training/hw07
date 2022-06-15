const Course = require('../model/course');

module.exports = {
    index:(req,res)=>{
        Course.find({}).then((data) => {
            res.json(data);
           });
     },
    viewOne:(req,res)=>{
        Course.findOne({_id:req.params.id}).then((data) => {
            res.json(data);
           });
        }, 
    create:(req,res)=>{
        const c = new Course(req.body);
         c.save().then(() => res.json({"msg":"Course added"})); 
     },
    update:(req,res)=>{
        Course.updateOne({_id:req.params.id},{title:req.body.title}).then(()=>{
            res.json({"msg":"Course title updated"});
        });
     },
    delete:(req,res)=>{
        Course.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"Course deleted"});
        });
    }
}