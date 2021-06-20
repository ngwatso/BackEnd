exports.up = function (knex) {
    return knex.schema
      .createTable("users", tbl => {
        tbl.increments();
        tbl.string("name", 256).notNullable();
        tbl.integer("phone number", 256).notNullable();
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();
       
        
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("users")
  };