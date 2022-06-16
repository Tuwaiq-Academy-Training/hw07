const router = require("express").Router();
const datacontroler = require("../controller/academy");
const userController = require('../controller/user');

router.post("/course/create", datacontroler.create);
//find
router.get("/course", datacontroler.index);
//update
router.put("/course/update/:id", datacontroler.update);
//Delete
router.delete("/course/delete/:id", datacontroler.delete);

module.exports = router;