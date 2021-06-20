// do not make changes to this file
// const sharedConfig = {
//   client: 'sqlite3',
//   useNullAsDefault: true,
//   migrations: { directory: './data/migrations' },
//   pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
// }

// module.exports = {
//   development: {
//     ...sharedConfig,
//     connection: { filename: './data/usersdb.db3' },
//     seeds: { directory: './data/seeds' },
//   },
//   // testing: {
//   //   ...sharedConfig,
//   //   connection: { filename: './data/test.db3' },
//   // }, //
// };
require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true,
    debug: true
  },
  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true,
    debug: true
  }
};
