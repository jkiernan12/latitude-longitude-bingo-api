require('dotenv').config({path: '../.env'})

module.exports = {

  development: {
    client: 'pg',
    connection: {
      //GET RID OF THIS
      host: 'localhost',
      database: "bingo_db",
      user:     "project_user",
      password: "fe2108"
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
