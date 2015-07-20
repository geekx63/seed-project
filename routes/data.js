var express = require('express');
var path = require('path');
var mock = require('mockjs');
var fs = require('fs');

var mockPath = path.join(__dirname,'../mock_tpl');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//    console.log(req.baseUrl);
//    console.log('mockPath:'+mockPath+'/test.mock');

    var mockTpl = fs.readFileSync(mockPath+'/test.mock').toString();
//    console.log(JSON.parse(mockTpl));
    var data = mock.mock(JSON.parse(mockTpl));
//    console.log(JSON.stringify(data, null, 4));
    res.send('You request a api');
});

module.exports = router;
