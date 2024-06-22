// Khai bao thu vien  const*** =  require('mmmmm')********
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const app = express()
// Cau hinh bien moi truong*************
require('dotenv').config()
const port = process.env.PORT
const webRouter = require('./routes/web.js')
// app.set('views', path.join(__dirname,'./src/views'))


configViewEngine(app)
//Thiet lap cac route app.get('/hhhhh', (req,res) => {   res.send() ; res.render()          })******************
app.use('/', webRouter)




//Thiet lap server va cho phan hoi****************************
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})