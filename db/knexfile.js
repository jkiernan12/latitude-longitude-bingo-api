require('dotenv').config({path: '../.env'})

module.exports = {

  development: {
    client: 'pg',
    connection: {
      //GET RID OF THIS
      host: 'localhost',
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
