const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/NFL-UI'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/NFL-UI/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);

var http = require("http");
setInterval(function() {
    http.get("http://nfl-picks-connor-stage.herokuapp.com");
    http.get("http://nfl-picks-connor-api.herokuapp.com");
}, 300000); // every 5 minutes (300000)

