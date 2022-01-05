# Latitude Longitude Bingo API

## Database Installation

1. Pull down repo
2. Ensure you have Node and PostgresQL installed.
3. Navigate to repo directory and run `npm i`
4. Create a new Postgres database with a user and password.
5. Create a new .env file in the root directory of the repo by typing `touch .env` in your terminal
6. Open the .env file and add three environment variables of DB_USER, DB_PASS, and DB_NAME with the syntax `DB_VAR=db_value`. Use the username, password and database name of your new Postgres database.
7. In your terminal, run `npm run migrate` to create the table, and `npm run seed` to add the data to the table