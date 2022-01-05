require('dotenv').config()
const express = require('express')
const app = express()
const port = 8080

const knexConfig = require('./db/knexfile');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

app.listen(port, () => {
  console.log(`listening on ${port}`)
})