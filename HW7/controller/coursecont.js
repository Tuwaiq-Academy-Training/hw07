const course= require('../model/course');


module.exports={

    index:(req,res)=>{
        course.find({}).then((data) => {
            res.json(data);
           });
     },

     

     index:(req,res)=>{
        course.find({_id:req.params.id}).then((data) => {
            res.json(data);
           });
     },

     

  
    create:(req,res)=>{
         new course(req.body)
         .save().then(() => res.json({"msg":" added"})); 
     },


    update:(req,res)=>{
        course.updateOne( {_id:req.params.id},{level:req.params.level}).then(()=>{
            res.json({"msg":" updated"});
        });
        {name:req.params.name}

     },
    delete:(req,res)=>{
        course.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":" deleted"});
        });
    }
}