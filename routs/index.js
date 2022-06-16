const router = require('express').Router();
const coursesC = require('../controller/courses');

router.post('/courses/create',coursesC.create);
 
 router.get('/courses',coursesC.index);

 router.get('/courses/findOne/:_id',coursesC.findone);
 
 router.put('/courses/update/:_id',coursesC.update);
 
 router.delete('/courses/delete/:_id',coursesC.delete);

module.exports = router;