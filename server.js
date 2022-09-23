const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv')

//req = request, res = response

//Middleware
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev'))

//Connect to Database
mongoose.connect(
    // `${process.env.MOVIES_PWD}`,
    "mongodb+srv://MerrimanLyon:13qeadzc%21%23QEADZC@cluster0.xqosq.mongodb.net/crudstoredb?retryWrites=true&w=majority",
    () => console.log("Connected to the Database")
)

//Routes
app.use("/items", require("./routes/itemRouter.js"))

//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Listener
app.listen(4000, () => {
    console.log("The server is running on Port 4000")
})