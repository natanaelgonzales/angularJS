module.exports = app => {
    const controller = require('../controllers/api')();

    app.route('/api/v1/')
      .get(controller.listapiData);
  }
