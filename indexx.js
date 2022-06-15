const router = require('express').Router();
const courseController = require('../controller/course');
const userContrller = require('../controller/user');



router.post('/user/create',userContrller.create);
//insert - create
router.post('/course/create',courseController.create);

router.get('/courses',courseController.indexx);
router.get('/course');
router.put('/course/update/:id',courseController.update);
router.delete('/course/delete/:id',courseController.delete);

module.export = router;
