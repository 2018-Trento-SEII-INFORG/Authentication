const express = require('express');
const jwt     = require('jsonwebtoken'); // used to create, sign, and verify tokens

var apiRoutes = express.Router();



// ---------------------------------------------------------
// public routes
// ---------------------------------------------------------
apiRoutes.get('/', function(req, res) {
	res.json({ message: 'Welcome to the coolest API on earth!' });
});



// ---------------------------------------------------------
// route middleware to check authentication token
// ---------------------------------------------------------
var tokenChecker = require('../middlewares/tokenChecker');
apiRoutes.use(tokenChecker);



// ---------------------------------------------------------
// protected routes
// ---------------------------------------------------------
apiRoutes.get('/check', function(req, res) {
	res.json(req.decoded);
});

var usersRoutes = require('./users');
apiRoutes.use('/users', usersRoutes);

//var examsRoutes = require('./exams');
//apiRoutes.use('/exams', examsRoutes);



module.exports = apiRoutes;