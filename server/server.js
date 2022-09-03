// import request from 'superagent'
const path = require('path')
const express = require('express')
const request = require('superagent')
// require('dotenv').config()

const welcome = require('./routes/welcome')

const server = express()


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.get('/api/v1/memes', (req, res) => {
  return request.get(`https://programmermemes.herokuapp.com/`)
  .then((response) => {
    res.json(response.body.memes)
    // return null 
  })
})

module.exports = server
