const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
    res.send("קבלת כל המוצרות")
})
router.get("/:id", (req, res) => {
    res.send("קבלת מוצר לפי קוד")
})
router.delete("/:id", (req, res) => {
    res.send("מחיקת מוצר לפי קוד")
})
router.put("/:id", (req, res) => {
    res.send("עדכון מוצר לפי קוד")
})
router.post("/", (req, res) => {
    res.send("הוספת מוצר")
})

module.exports = router;