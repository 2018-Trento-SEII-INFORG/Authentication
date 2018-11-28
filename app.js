// =================================================================
// get the packages we need ========================================
// =================================================================
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('./config'); // get our config file
const User   = require('./app/models/user');



// =================================================================
// initialize in-memory db =========================================
// =================================================================
// create a sample user
var nick = User.findOrCreate({
  id: '1234',
  name: 'nick', 
  password: 'nick',
  admin: true 
});


// =================================================================
// setup express ===================================================
// =================================================================
const app = express();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secret variable
app.set('superSecret', config.secret);



// =================================================================
// setup routes ====================================================
// =================================================================

// basic route
app.get('/', function(req, res) {
	res.send('Hello! The API is at /api/v1');
});

// usefull setup route
/*
app.get('/setup', function(req, res) {
		res.json({ success: true });
});
*/

// authentication routes
var authenticationRoutes = require('./app/routes/authentications');
app.use('/authentications', authenticationRoutes);

// api routes
var apiRoutes = require('./app/routes/apis');
app.use('/api/v1', apiRoutes);



// =================================================================
// export app ======================================================
// =================================================================
module.exports = app;
