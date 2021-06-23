const { Router } = require('express');
const { get, pais, puro } = require('../control/index.js')
const router = Router()

router.get('/', get)
router.get('/:idPais', pais);

module.exports = router
