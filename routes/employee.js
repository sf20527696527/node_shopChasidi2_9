
const express = require("express");
const empController = require("../controllers/emplyee")


const router = express.Router();


router.get("", empController.getAll)
router.get("/:id", empController.getById)
router.delete("/:id", empController.deleteById)
router.put("/:id", empController.updateEmployee)
router.post("/", empController.add)

module.exports = router;