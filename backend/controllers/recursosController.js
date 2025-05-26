const Recurso = require('../models/recursoModel');

exports.getRecursos = (req, res) => {
  Recurso.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createRecurso = (req, res) => {
  Recurso.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId, ...req.body });
  });
};

exports.updateRecurso = (req, res) => {
  Recurso.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Actualizado');
  });
};

exports.deleteRecurso = (req, res) => {
  Recurso.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Eliminado');
  });
};
