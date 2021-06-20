
module.exports = {
  development:{
      client:"sqlite3",
      useNullAsDefault:true,
      connection:{
          filename:'./data/usersdb.db3'
      },
      migrations:{
          directory:"./data/migrations"
      },
      seeds:{
          directory:"./data/seeds"
      },

      pool: {
          afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done); // enforce FK
          }
        }
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
}