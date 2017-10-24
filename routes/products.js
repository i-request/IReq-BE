const router = require('express').Router();
const {getAllProducts, addProduct, ChangeProductStock} = require('../controllers/controllers')

router.get('/', getAllProducts)
router.post('/', addProduct)
router.put('/:_id', ChangeProductStock)

module.exports = router;