const express = require('express');
const router = express.Router();
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
var LocalStrategy = require('passport-local');

var sqlConnection = require('../db.js');



passport.use(new LocalStrategy(function verify(username, password, cb) {

    console.log("user" + username);
    console.log("pass" + password);
    sqlConnection.get('SELECT * FROM usuarios WHERE username = ?', [ username ], function(err, row) {
        
        console.log("row" + row);
      if (err) { return cb(err); }
      if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

      if (password == row.password) {
        return cb(null, row);
      }else{
        return cb(null, false, { message: 'Incorrect username or password.' });
      }

    });
  }));


  router.post('/login', passport.authenticate('local', {
    successRedirect: '/inicial',
    failureRedirect: '/'
  }));


    

module.exports = router;