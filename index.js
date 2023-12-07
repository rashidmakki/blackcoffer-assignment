const express = require("express")
var bodyParser = require('body-parser')
const connectToDB = require("./config/connection")
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
const dataRouter = require("./route/dataRoute");

const PORT = process.env.PORT || 5000

const app = express()
connectToDB()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));

app.get("/",(req,res)=>{
  res.send("Hi This application is running")
})

app.use("/data", dataRouter);


app.listen(PORT, ()=> console.log("Server is listening at port : ", process.env.PORT))
  