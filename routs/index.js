const router = require('express').Router();
const courseCon = require('../controller/course');



 router.post('/course/create',courseCon.create);
 
 router.get('/course',courseCon.index);

 router.get('/course/view/:id',courseCon.viewOne);
 
 
 router.put('/course/update/:id',courseCon.update);
 
 router.delete('/course/delete/:id',courseCon.delete);



module.exports = router;