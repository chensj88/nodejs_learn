//编码问题处理
var http = require('http')

var server = http.createServer();

server.on('request',function (req,res) {
    //传输给前端加上编码

    var url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end(' 欢迎访问本网站，你的IP地址为：'+ req.socket.remoteAddress + req.socket.remotePort );
    }else if(url === '/plain'){
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end(' 中文信息 3000 services');
    }else if(url === '/html'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>中文信息</h1>');
    }

});

server.listen(3000,function () {
    console.log('服务启动OK');
})