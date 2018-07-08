const express = require('express'),
    router = express.Router(),
    vehicule = require('./vehiculo.api');

/**
 * Establece cual va a ser el parametró único
 */
router.param('id', (req, res, next, id) => {
    req.body.id = id;
    next();
  });
  
  /**
   * Función que se encarga de registrar los usuarios dentro del local storage
   */
  router.route('/save_vehicule')
    .post((req, res) => {
      vehicule.register(req,res);
  });
  module.exports = router;