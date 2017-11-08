var express = require('express');
var request = require('request');
var app = express();

app.use('/', express.static(__dirname + '/dist'))

app.use('/v1', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    var url = 'http://newescrowadmin.ename.cn/v1' + req.url;
    console.log(url,"url")
    req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000); 