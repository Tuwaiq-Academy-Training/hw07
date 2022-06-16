const router = require('express').Router();
const courseController = require('../controller/coursecont');

//*******************************insert-course*****************************
router.post('/create/course',courseController.create);


//****************************find all course***********************
router.get('/course',courseController.index);

//*********************find one course by id********************************* 
router.get('/course/:id',courseController.indexone);


//*****************************update**************************
router.put('/update/:level/:id',courseController.update);

//***********************Delete*********************************8
router.delete('/delete/course/:id',courseController.delete);
module.exports = router;


