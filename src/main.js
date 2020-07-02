const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.send('hello, express')
})

app.get('/first', function(req, res) {
  res.send('hello aaa')
})

app.listen(3000)