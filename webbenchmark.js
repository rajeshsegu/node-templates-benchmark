//WORK UNDER PROCESS

var fs = require('fs'),
    express = require('express'),
    data = require('./data');

var app = express();

app.configure(function(){
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());    
    app.use(express.compress());         
    app.use(app.router);    
});

app.get("/handlebars", function(req, res){
    var templateHandler = require('./handlebars/handlebars.js');
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(templateHandler.prepare(data));
    res.end();
});

app.listen(8080);
console.log('Server running at http://localhost:8080/');