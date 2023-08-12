const express = require('express');
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDb = require("./config/db.js");
const watchlistRoutes = require("./routes/watchlistRoutes.js");
const { errorHandler } = require("./middlewares/errormiddleware.js");

const PORT = process.env.PORT || 5000;

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(watchlistRoutes);

app.use(errorHandler);
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
