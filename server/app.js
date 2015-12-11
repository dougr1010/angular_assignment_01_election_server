var express = require('express');
var democrats = require('./public/assets/data/democrats.json');
var republicans = require('./public/assets/data/republicans.json');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    console.log("hit/endpoint");
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getDemocrats', function(request, response){
    console.log("hit democrat endpoint");
    response.send(democrats);
});

app.get('/getRepublicans', function(request, response){
    console.log("hit republicant endpoint");
    response.send(republicans);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on address: ' + port);
});

module.exports=app;

