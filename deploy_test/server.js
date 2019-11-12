var express = require('express')
var app = express()
var port = 3000
var host = '0.0.0.0'

app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(port, host, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('server open on port %s, please open http://%s:%s', port, host, port)
  }
})
