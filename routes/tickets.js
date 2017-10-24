const router = require('express').Router();
const {getAllTickets, addTicket, ChangeTicketProp} = require('../controllers/controllers')

router.get('/', getAllTickets)
router.post('/', addTicket)
router.put('/:_id',ChangeTicketProp)

module.exports = router;