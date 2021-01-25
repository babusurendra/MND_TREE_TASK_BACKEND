const dotenv = require("dotenv");
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(cors())
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())
const userRouter = require('./Router/user-router');
app.use('/users',userRouter);
app.listen(8080,(error ,success)=>{
  if(error){
      console.log(`Error while creating server on ${process.env.DEVPORT}`);
  }else{
      console.log(`Server started on port : ${process.env.DEVPORT}`);
  }
})