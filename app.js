const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
//import routes
const userRoutes = require('./routes/users')

// app
const app = express()

// database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then( () => console.log('DB connected'))

// routes (all routes will have api prefix)
app.use('/api', userRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});