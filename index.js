require('dotenv').config()

const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./db/knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors')

app.use(cors())

app.set('port', process.env.PORT || 8080)

app.get('/api/v1/countries', async (req, res) => {
  try {
    const countries = await database('countries').select();
    res.status(200).json(countries);
  } catch(error) {
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Bingo Express listening at ${port}`)
})
