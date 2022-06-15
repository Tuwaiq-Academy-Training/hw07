const router = require("express").Router();
const datacontroler = require("../controler/data");

router.post("/course/create", datacontroler.create);
//find
router.get("/course", datacontroler.index);
//update
router.put("/course/update/:id", datacontroler.update);
//Delete
router.delete("/course/delete/:id", datacontroler.delete);

module.exports = router;
