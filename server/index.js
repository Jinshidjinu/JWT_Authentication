const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute");

// 1) MIDDLEWARES
app.use(cors());
app.use(express.json());

// 2) ROUTE
app.use('/api/auth', authRouter);

// 3) MONGODB CONNECTION 
mongoose.connect('mongodb://127.0.0.1:27017/authentication')
    .then(() => console.log("connected to MongoDB!"))
    .catch((error) => {
        console.log("Failed to connect to MongoDB:", error);
    });

// 4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

// 5) SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
