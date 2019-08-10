
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {Make: 'Rollz Royce', Model: 'Phantom', Mileage: 200, VIN_NUMBER: 123131313123123},
        {Make: 'Ali Mobile', Model: 'Da One', Mileage: 0, VIN_NUMBER: 12313131323423},
        {Make: 'Lexus', Model: 'LS-400', Mileage: 400, VIN_NUMBER: 13456346657575},
        {Make: 'Mercedes', Model: 'CVX', Mileage: 200, VIN_NUMBER: 123132342368623123},
      ]);
    });
};
