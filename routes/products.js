const router = require('express').Router();
const {getAllProducts} = require('../controllers/controllers')

router.get('/', getAllProducts)

module.exports = router;