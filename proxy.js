var express = require('express');
var request = require('request');
var app = express();
var static = require('node-static');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/dist');

app.get('/', function(req, res) {
	res.render('index')   //主页index.html
})

var file = new static.Server('./dist/static');
app.use('/static', function(req, res) {
	file.serve(req, res);  //静态文件服务
})


app.use('/v1', function(req, res) {  //v1这个路由的转发代理，获取api数据返回
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	var url = 'http://local.newwechat.ename.cn/v1' + req.url;
	console.log(url, "url")
	req.pipe(request(url)).pipe(res);
}); 
app.listen(process.env.PORT || 8082);