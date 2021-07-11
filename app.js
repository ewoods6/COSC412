const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('app.js response')
});

const port = process.env.PORT || 8000