const asyncHandler = require("express-async-handler");

const addToWatchlist = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error("Hello world")
    }

    res.status(200).json({
        messege: "added to watchlist"
    });
})

const removeFromWatchlist = asyncHandler(async (req, res) => {
    res.status(200).json({
        messege: "removed from watchlist",
        id: req.params.id
    })
})

const getWatchlist = asyncHandler(async (req, res) => {
    res.status(200).json({
        messege: "fetched all movies from watchlist",
    })
})
module.exports = {
    addToWatchlist, removeFromWatchlist, getWatchlist
}