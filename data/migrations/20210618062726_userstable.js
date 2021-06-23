exports.up = function (knex) {
    return knex.schema
      .createTable("users", (users) => {
        users.increments("id");
        users.string("username", 128).notNullable().unique().index();
        users.string("password", 256).notNullable();
        users.string("email", 256).notNullable(); 
        users.timestamps(false, true)
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("users")
  };