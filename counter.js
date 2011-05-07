var http = require('http');

var counter = 0;

http.createServer(function(req, res){
    if(req.url != '/favicon.ico') counter++;
    
    res.writeHead(200);
    res.write('Sie sind Besucher Nummer '+counter);
    res.end();
    
}).listen(process.env.C9_PORT,'0.0.0.0');