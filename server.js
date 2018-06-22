http = require('http'),
util = require('util'),
//Install express server
express = require('express'),
songRoute = require('./api/songRoutes'); 
multer = require('multer');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname + '/dist')));
app.use('/api/songs', songRoute);

// Start the app by listening on the default local or Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});