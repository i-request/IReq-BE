const router = require('express').Router();
const {getAllTickets, addTicket} = require('../controllers/controllers')

router.get('/', getAllTickets)
router.post('/', addTicket)

module.exports = router;