const router = require('express').Router();
const {getAllTickets, addTicket, getArchTickets, ChangeTicketProp, getCanceledTickets, getViewTickets, getNotCompletedTickets} = require('../controllers/controllers')

router.get('/', getAllTickets)
router.get('/viewed', getViewTickets)
router.get('/done', getNotCompletedTickets)
router.get('/canceled', getCanceledTickets)
router.get('/archieved', getArchTickets)
// router.post('/', addTicket)
router.put('/:_id',ChangeTicketProp)

module.exports = router;

