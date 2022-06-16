const router = require("express").Router()
const courseController = require("../controller/course");

// insert
router.post("/course/create", courseController.create);
// find
router.get("/courses", courseController.index);
// update
router.put("/course/update", courseController.update);
// delete
router.delete("/course/delete/:id", courseController.delete);

module.exports = router;



// ----------------------------------

