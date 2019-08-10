
exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
      tbl.increments('Sale_id');
      tbl.foreign('Sale_id').references('id').inTable('cars');
      tbl.text('List_Price');
      tbl.text('Sales_Price');
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
  return knex.schema.dropTableIfExists('sales');
};
