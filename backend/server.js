const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = express();
dotenv.config();

const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./config/db');
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;


app.use("/api/goals", require('./routes/goalRoutes'));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
