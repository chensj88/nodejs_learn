//编码问题处理
var http = require('http')
var fs = require('fs')

var server = http.createServer();

server.on('request',function (req,res) {
    var url = req.url;
    if( url === '/'){
        fs.readFile('./resources/index.html',function (error,data) {
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败，请稍候重试');
            }else{
                res.setHeader('Content-Type','text/css;charset=utf-8');
                res.end(data);
            }
        })
    }else if( url === '/css'){
        fs.readFile('./resources/main.css',function (error,data) {
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败，请稍候重试');
            }else{
                res.setHeader('Content-Type','text/css;charset=utf-8');
                res.end(data);
            }
        })
    }else if( url === '/js'){
        fs.readFile('./resources/main.js',function (error,data) {
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败，请稍候重试');
            }else{
                res.setHeader('Content-Type','application/x-javascript;charset=utf-8');
                res.end(data);
            }
        })
    }else if( url === '/text'){
        fs.readFile('./resources/a.txt',function (error,data) {
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败，请稍候重试');
            }else{
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end(data);
            }
        })
    }

});

server.listen(3000,function () {
    console.log('服务启动OK');
})