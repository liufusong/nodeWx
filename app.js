const express = require('express')
 
const bodyParser =  require('body-parser');
 
const fs = require('fs');
 
const path = require('path')
 
const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }))
 
app.listen(3000,()=>{
console.log('running as http://127.0.0.1:3000')
})
