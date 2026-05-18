
const express = require('express');
const router = express.Router();
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect, admin } = require('../middlewares/auth');

router.get('/', getEvents);

//Get Event by id
router.get('/:id', getEventById);

//Create Event (Admin only)
router.post('/', protect, admin, createEvent);

//Update event (Admin only)
router.put('/:id', protect, admin, updateEvent);

//Delete event (Admin Only)
router.delete('/:id', protect, admin, deleteEvent);

module.exports = router;