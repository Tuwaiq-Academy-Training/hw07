const router = require("express").Router();
const  dataCont= require("../controller/data");


router.post('/course/create',dataCont.create);

router.get("/course",dataCont.index);
router.get('/course/view/:id',dataCont.viewOne);


router.put('/course/update/:id', dataCont.update);
router.delete('/course/delete/:id', dataCont.delete);


module.exports=router;