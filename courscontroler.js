const Course = require("../Model/coursmodel");

module.exports = {



    index: (req, res) => {
        Course.find({}).then((data) => {     
        res.json(data);
      }),
    },


    create: (req, res) => {
      const newcourse=new Course(req.body);
      newcourse.save().then(()=>res.json({"msg":"course created"}))  
    },
  
  
    update:(req,res)=>{
      Taske.updateMany({_id : req.params.id},{title:req.body.name}).then(()=>{
          res.json({'msg' : "course updated"})})
  },
  
    delete: (req, res) => {
      Course.deleteOne({_id:req.params.id}).then (()=> {
        res.json({'msg' : "course deleted"});
    });
  }
}