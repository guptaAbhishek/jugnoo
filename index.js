var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var request = require('request');


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(request, response) {
    response.render('index.html');
});


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});
