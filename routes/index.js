'use strict';
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.sendfile('./index.html')
});

router.post('/input', (req, res) => {
   /* mongoose.connect('mongodb://localhost/mycustomers')
        .then(() => console.log('connection succesfull'))
        .catch((err) => console.error(err));*/
    console.log(req.body)
})





module.exports = router;
