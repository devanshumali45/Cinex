const mongoose = require("mongoose");


const connectDb = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected : ${conn.connection.host}`.cyan);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDb;