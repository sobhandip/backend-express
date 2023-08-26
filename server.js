const express= require('express');
var bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv=require('dotenv').config();
connectDb();
const app= express();

const port=process.env.PORT || 5000;
//body-parser is used to parse and receive the data which is sent from client to server side
app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use("/api/contacts",require('./routes/contactRoutes'))
app.use("/api/users",require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`app server is running on port ${port}`)
})