
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sticker').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert(stickers);
    });
};
