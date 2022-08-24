const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors")
const authRoute = require("./routes/auth")
const categoryRoute = require("./routes/category")
const carRoute = require("./routes/car")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('connected to mongoDB');
}).catch(err => {
    console.log(err);
});

app.use(cors())
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/cars", carRoute)
app.use("/api/category", categoryRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
})