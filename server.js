http = require('http'),
util = require('util'),
//Install express server
express = require('express'),
songRoute = require('./api/songRoutes'); 
const Provider = require('oidc-provider');

const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname + '/dist')));
app.use('/api/songs', songRoute);

const oidc = new Provider('http://localhost:3000');

oidc.initialize({
    clients: [{ client_id: 'foo', client_secret: 'bar', redirect_uris: ['http://localhost:8080/home']}],
}).then(() => {
    oidc.listen(3000);
    console.log('oidc-provider listening on port 3000, check http://localhost:3000/.well-known/openid-configuration');
});

// Start the app by listening on the default local or Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});