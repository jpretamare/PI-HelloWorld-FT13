const { Router } = require('express');
const {activ, tur} = require('../control/index')
const router = Router();

router.post('/new', activ)
router.get('/', tur)

module.exports = router;