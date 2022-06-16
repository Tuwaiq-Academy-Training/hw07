const router = require('express').Router();
const courseContorller =require('../controller/course');

//insert-create
router.post('/course/create',courseContorller.create);
//find
router.get('/courses',courseContorller.index);
//update
router.put('/course/update/:id',courseContorller.update);
//Delete
router.delete('/course/delete/:id',courseContorller.delete);
module.exports = router;