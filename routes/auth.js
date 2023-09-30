const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authController = require('../controllers/auth'); 

router.post('/login',  authController.login);
    

module.exports = router;