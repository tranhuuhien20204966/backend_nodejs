const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    // Trong render thi sex dung ejs => config ejs app.set("view engine", 'ejs')***************
app.set('views', './src/views')
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname,'./src/views'))


// console.log(process.env)

// Cau hinh static file
// console.log(path.join('./src', 'public'))
app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine