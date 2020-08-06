// import express
const express = require('express')
// init express app
const app = express()
// init dotenv
require('dotenv').config()
// require routes
const indexRoutes = require('./routes/index')
// include routes
app.use('/',indexRoutes)

app.listen(process.env.APP_PORT,() => {
    console.log(`App runing on port ${process.env.APP_PORT}`);
})