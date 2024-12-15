let arrEmp = [
    { id: 1, name: "sara", salary: 560 },
    { id: 2, name: "mira", salary: 12060 },
]

const getById = (req, res) => {
    let id = req.params.id;
    let emp = arrEmp.find(item => item.id == id)
    if (!emp)
        return res.status(404).json({ type: "nossing paramter", message: "no employee with suxh id" })
    res.json(emp)
}


const getAll =
    (req, res) => {
        res.json(arrEmp)
    }
const deleteById = (req, res) => {
    res.send("מחיקת עובד לפי קוד")
}

const add = (req, res) => {
    res.send("הוספת עובד")
}

const updateEmployee = (req, res) => {
    res.send("עדכון עובד לפי קוד")
}

module.exports = { updateEmployee, add, getAll, getById, deleteById };