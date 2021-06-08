const { Router } = require('express');
const {activ} = require('../control/index')
const router = Router();

router.post('/', activ)

module.exports = router;