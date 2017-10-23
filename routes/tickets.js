const router = require('express').Router();
const {getAllTickets} = require('../controllers/controllers')

router.get('/', getAllTickets)

module.exports = router;