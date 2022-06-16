const router = require('express').Router();
const info =require('./controller/info');

router.post('/courses/create',info.create);

router.get('/courses',info.index);

router.get('/courses/view',info.viewOne);

router.put('/courses/update',info.update);
router.delete('/courses/delete/:id',info.delete);



module.exports=router;
