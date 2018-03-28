const express = require('express');
var app = express()


var messages = [
    {name:'Mohamed', message: 'hello'},
    {name:'Mahmoud', message: 'iam here'}
]

app.get('/messages',(req, res)=>{
    res.send(messages)
});

app.use(express.static(__dirname));
var server = app.listen(3000, ()=>{
    console.log('server is listening on port', server.address().port);
});