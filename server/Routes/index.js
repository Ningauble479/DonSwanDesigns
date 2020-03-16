const express = require('express');
const router = express.Router();
const GETP = require('./getProducts')
const GETSP = require('./getSpecificProduct')
const CHECK = require('./check')
const PUTIC = require('./putInCart')

router.get('/getProducts', GETP)
router.post('/getSpecificProduct', GETSP)
router.post('/checkIfAvailable', CHECK)
router.post('/putInCart', PUTIC)

module.exports = router;