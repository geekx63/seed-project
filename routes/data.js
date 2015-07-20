var express = require('express');
var path = require('path');
var mock = require('mockjs');
var fs = require('fs');

var mockPath = path.join(__dirname,'../mock_tpl/');
var router = express.Router();

/* GET restAPI data. */
router.all('/*', function(req, res, next) {
  var fileName = req.url.split('/').slice(1).join('_')+'.mock';//根据请求api获取对应文件名称
    console.log(fileName);

    var mockTpl = fs.readFileSync(mockPath+fileName).toString();
    var data = mock.mock(JSON.parse(mockTpl));
    res.send(data);
});

module.exports = router;
