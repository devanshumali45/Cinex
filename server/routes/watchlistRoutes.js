const express = require('express');
const { addToWatchlist, getWatchlist, removeFromWatchlist } = require('../controllers/watchListControllers.js');

const router = express.Router();

router.get('/watchlist', getWatchlist);

router.post('/add', addToWatchlist);

router.delete('/:id', removeFromWatchlist);

module.exports = router;