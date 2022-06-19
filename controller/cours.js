const cours= require('../model/cours')
module.exports ={
    create: (req, res) => {
        const newcourse=new course(req.body);
        newcourse.save().then(()=>res.json({"msg":"course created"}))  
      },
    
    find: (req, res) => {
        course.find({}).then(data => { res.send(data)})
      },
    index: (req, res) => {
    let user=course.find((element)=>element.coursename==req.params.coursename)
        user.cours=req.body.coursename;(data => { res.send(data)})
      },
    
    update:(req,res)=>{
        course.updateOne({_id : req.params.id},{title:req.body.name}).then(()=>{
            res.json({'mes' : "course updated"})})
    },
    
    delete: (req, res) => {
        course.findByIdAndDelete(req.params.id).then(user => {
          res.send(course) })
      }
}