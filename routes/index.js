const router = require('express').Router();
const courseController = require('../controller/courses');

router.post('/course/create',courseController.create);
//find
router.get('/courses',courseController.index);
//find one
router.get('/course/:id',courseController.findone);
//update
router.put('/course/update/:id',courseController.update);
//Delete
router.delete('/course/delete/:id',courseController.delete);

module.exports = router;