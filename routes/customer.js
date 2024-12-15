const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
    res.send("קבלת כל הלקוחות")
})
router.get("/:id", (req, res) => {
    res.send("קבלת לקוח לפי קוד")
})
router.delete("/:id", (req, res) => {
    res.send("מחיקת לקוח לפי קוד")
})
router.put("/:id", (req, res) => {
    res.send("עדכון לקוח לפי קוד")
})
router.post("/", (req, res) => {
    res.send("הוספת לקוח")
})

module.exports = router;