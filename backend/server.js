const express = require('express');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;


app.use("/api/goals", require('./routes/goalRoutes'));

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
