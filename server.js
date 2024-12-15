const express = require("express")
const employeeRouter = require("./routes/employee");
const customerRouter = require("./routes/customer");
const productRouter = require("./routes/product");


const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017")
    .then(() => { console.log("mongo db connected") })
    .catch(err => { console.log(err) })
app.use(express.json());

app.use("/employee", employeeRouter);
app.use("/customer", customerRouter);
app.use("/product", productRouter);


app.listen(8080, "localhost", () => {
    console.log("app is listening on port 8080")
})