const db = require('../config/db');

const Recurso = {
  getAll: (callback) => {
    db.query('SELECT * FROM recursos', callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO recursos SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE recursos SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM recursos WHERE id = ?', [id], callback);
  }
};

module.exports = Recurso;
