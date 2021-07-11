const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
require('dotenv').config()
//import routes
const authRouters = require('./routes/auth')

// app
const app = express()

// database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then( () => console.log('DB connected'))

// middlewares
app.use(expressValidator());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// routes middleware 
app.use('/api', authRouters);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});