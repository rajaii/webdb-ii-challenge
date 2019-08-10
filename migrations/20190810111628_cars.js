
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.text('Make').notNullable();
        tbl.text('Model')
          .unique()
          .notNullable();
        tbl.integer('Mileage');
        tbl.integer('VIN_NUMBER')
          .unique()
          .notNullable();
        tbl.text('Transmission_Type');
        tbl.text('Title_Status');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  
  //1