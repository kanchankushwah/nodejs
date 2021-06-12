const path = require('path');

const express = require('express');

const rootDir = require('../path/path');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    //console.log('Welcome User');
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

router.post('/users', (req, res, next) => {
    users.push({user: req.body.user});
    //console.log(req.body);
    res.redirect('/');
});

exports.router = router;
exports.users = users;

//module.exports = router;

