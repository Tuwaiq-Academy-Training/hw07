//routes : index
const router = require('express').Router();
const coursescontroller = require('../controller/courses')
//get
router.get('/courses',coursescontroller.index);
//select one 
router.get('/course/:id',coursescontroller.select);
//create 
router.post('/course/create',coursescontroller.create);
//update
router.put('/course/update/:id',coursescontroller.update)
//delete
router.delete('/course/delete/:id',coursescontroller.delete)

module.exports = router;