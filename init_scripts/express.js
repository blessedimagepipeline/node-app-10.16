const express = require('express')
const app = express()
var port = process.env.PORT || 1337;
var appcmdline = process.env.APPSETTING_APPCOMMANDLINE;

var response = 'Version: ' + process.version + "\n"+ 
                "Hello World!" + "\n " + 
                'App Command Line: ' + appcmdline + "\n";

app.get('/', (req, res) => res.send(response))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
