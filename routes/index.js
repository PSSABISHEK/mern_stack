'use strict';
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.sendfile('./www/index.html')
});

/*router.post('/input', (req, res) => {
    console.log(req.body)
})*/

module.exports = router;
