var express = require('express');
var request = require('request');
var app = express();
app.use('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    var url = 'http://wx.ename.com' + req.url;
    req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000); 