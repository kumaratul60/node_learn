const express = require('express');
const errorHandler = require('./middleware/errorHandlers');
const connectDB = require('./config/dbConnection');

/***
dotenv give going to give you, access to fetch the value of the  port  from  the environment variable file with the help of a process module which is a core module of Node js 
*/

const dotenv = require('dotenv').config()

connectDB()

const app = express()
const port = process.env.PORT || 5000;

/*
app.get("/api/contacts",(req,res)=>{
    // res.send("Get all contacts")
    // res.json({msg:"Get all contacts"})
    res.status(200).json({msg:"Get all contacts"})
})
*/
// amm.use is know as middleware in express project

//  this is going to provide a parser which will help us to parse the data stream  that we receive from clint on the server side
app.use(express.json())

app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})