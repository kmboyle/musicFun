//Install express server
const express = require('express');
const app = express();
// import { environment } from './src/environments/environment';

// if (environment.production) {
//     // Serve only the static files form the dist directory
//     app.use(express.static(__dirname + '/dist'));
// }


// Serve only the static files form the src directory
app.use(express.static(__dirname + '/src'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);