module.exports = () => {
    const apiDB = require('../data/api.json');
    const controller = {};

    controller.listapiData = (req, res) => res.status(200).json(apiDB);

    return controller;
  }
