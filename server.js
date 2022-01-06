const express = require('express')
const app = express()
const port = 3000
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./db/knexfile')[environment];
const database = require('knex')(configuration);

app.get('/api/v1/countries', async (req, res) => {
  try {
    const countries = await database('countries').select();
    res.status(200).json(countries);
  } catch(error) {
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Bingo Express listening at http://localhost:${port}`)
}) 
