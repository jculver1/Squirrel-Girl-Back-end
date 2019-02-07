const express = require('express')
const app = express()
const port = 3005
var cors = require('cors')
const parser = require('body-parser')
const db = require('./db');

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
    db('quotes')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})



app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))