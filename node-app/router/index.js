const path = require('path');


const express = require('express');

const rootDir = require('../path/path');
const adminData = require('./')

const router = express.Router();


router.get('/', (req, res, next) => {
    console.log('index.js', adminData.users);
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
   
});


module.exports = router;