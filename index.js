const express = require('express')
require('dotenv').config()
// import express from "express"
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Got it")
})

app.get('/login', (req, res) => {
    res.send("Got it")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.port, () => {
    console.log(`Example app listening on port`)
  })
