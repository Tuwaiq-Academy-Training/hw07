const router = require("express").Router()
const courseC = require("../controler/courscontroler");

// insert
router.post('/course/create', courseC.create);
// find
router.get('/courses', courseC.index);
// update
router.put('/course/update', courseC.update);
// delete
router.delete('/course/delete/:id', courseC.delete);

module.exports = router;