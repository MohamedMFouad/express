const express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)


app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


var messages = [
    {name:'Mohamed', message: 'hello'},
    {name:'Mahmoud', message: 'iam here'}
]
app.get('/messages', (req, res)=>{
    res.send(messages)
})
app.post('/messages', (req, res) =>{
     messages.push(req.body)
    res.sendStatus(200);
})
io.on('connection', function(socket){
    console.log('a user connected');
  });


var server = app.listen(3000, ()=>{
    console.log('server is listening on port', server.address().port);
});

