var express = require('express');
var mock = require('mockjs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var data = mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    });
    console.log(JSON.stringify(data, null, 4));
    res.send('You request a api');
});

module.exports = router;
