var http = require('http'),  
    io = require('socket.io'),
    fs = require('fs');

var server = http.createServer(function(req, res){ 

    res.writeHead(200, {'Content-Type': 'text/html'});
    var content = fs.readFileSync('chat.html');
    res.end(content); 
});

server.listen(8083,'78.46.28.196');
  
var socket = io.listen(server); 

socket.on('connection', function(client){ 
 console.log('connected');
  client.emit('message', {foo: 'bar'});
  client.on('message', function(){
      
  }); 
  
  client.on('disconnect', function(){
  }) 
}); 