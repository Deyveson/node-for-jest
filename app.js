const express = require('express')
const app = express()
app.get('/pedido', (req, res) => {
    res.status(200).send('test Deyveson')
})
module.exports = app