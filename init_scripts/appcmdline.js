var http = require('http');

var appcmdline = process.env.APPSETTING_APPCOMMANDLINE;

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Version: ' + process.version + "\n");
    response.write('App Command Line: ' + appcmdline + "\n");
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
