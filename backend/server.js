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

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Goal Setter API' });
}
app.use("/api/goals", require('./routes/goalRoutes'));
app.use("/api/users", require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
