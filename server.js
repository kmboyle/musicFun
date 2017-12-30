//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('api/performances/', function(req, res) {
        res.json('./api/performances/music.json')
    })
    // Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);