const router = require('express').Router();
const {getAllProducts, addProduct, ChangeProductProp} = require('../controllers/controllers')

router.get('/', getAllProducts)
router.post('/', addProduct)
router.put('/:_id', ChangeProductProp)


module.exports = router;