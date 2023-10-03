const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});



router.get('/home', function(req, res, next){
    res.render('home');
});


router.get('/inicial', (req, res) => {
    res.render('inicial');
});

module.exports = router;