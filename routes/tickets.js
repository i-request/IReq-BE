const router = require('express').Router();
const {getAllTickets, addTicket, ChangeTicketProp, getViewTickets} = require('../controllers/controllers')

router.get('/', getAllTickets)
router.get('/viewed', getViewTickets)
// router.post('/', addTicket)
router.put('/:_id',ChangeTicketProp)

module.exports = router;