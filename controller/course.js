const course = require('../model/course')
module.exports={
    create:(req,res)=>{
        new courses((req.body)).save().then(() => res.json({"mag":"courses created"}));},
    delete:(req,res)=>{
        courses.deleteOne({ _id: req.params.id },
           {title: req.body.title}).then(()=>{  res.json({"mag":"courses delete"}) }) } ,
    find: (req,res)=>{  courses.find({}).then((data)=>{ res.json(data); })},
    update:(req,res)=>{ courses.updateOne({ _id: req.params.id },
           {title: req.body.title}).then(()=>{  res.json({"mag":"courses update"}) }) } 
}