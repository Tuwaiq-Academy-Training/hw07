const router =require("express").Router();
const courses =require('../model/courses');
const coursescont=require('../controller/courses'); 
 //find
  router.get('/courses',coursescont.find)
//populate('userid')
//insert
router.post('/courses/create',coursescont.create)
//update
router.put('/courses/update/:id',coursescont.update )
//delete
router.delete('/courses/delete/:id',coursescont.delete)

module.exports = router;