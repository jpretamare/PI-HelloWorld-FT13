const { Router } = require('express');
const axios = require('axios');
const { Country, Turism } = require('../db.js');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries')
const activities = require('./activities')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries)
router.use('/activities', require('./activities'))

module.exports = router;
