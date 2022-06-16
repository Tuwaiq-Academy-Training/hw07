const Course = require("../model/course").default

// exports.index = function (req, res) {
//   res.render("index", { title: "Express" })
// }

module.exports = {

  create: (req, res) => {
    const newcourse=new Course(req.body);
    newcourse.save().then(()=>res.json({"msg":"course created"}))  
  },

  index: (req, res) => {
    Course.find({}).then(data => { res.send(data)})
  },


  update:(req,res)=>{
    Taske.updateOne({_id : req.params.id},{title:req.body.name}).then(()=>{
        res.json({'mes' : "course updated"})})
},

  delete: (req, res) => {
    Course.findByIdAndDelete(req.params.id).then(user => {
      res.send(Course) })
  },
}
