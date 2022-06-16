const router = require('express').Router();
const courseController = require('../controller/courses');

//insert-create
router.post('/course/create',courseController.create);
//find
router.get('/courses',courseController.index);
router.get('/courses/:id',courseController.index);

//update
router.put('/course/update/:id',courseController.update);
//Delete
router.delete('/course/delete/:id',courseController.delete);

module.exports = router;