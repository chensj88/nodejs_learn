//node 构建服务器
//node 中提供了一个核心模块http
//http 这个模块的职责就是帮你创建一个web服务器

var http = require('http');
var  server = http.createServer();
server.on('request',function (request,response) {
    // response.write('hello ');
    // response.write('nodejs ');
    // response.end();
   // response.end('hello nodejs!'); //等同于上面的代码
   //根据请求路径返回不同的响应
    var url = request.url; //获取的是端口号之后的路径
    //也就是说url都是以/开头的
    if( url === '/'){
        response.end('index page');
    }else if( url === '/login'){
        response.end('login page');
    }else if( url === '/products'){
        var products = [
            {
                name:'apple x',
                price:8888
            },{
                name:'huawei',
                price:5000
            },{
                name:'oppo',
                price:3000
            },
            {
                name:'vivo',
                price:2000
            }
        ];
        response.end(JSON.stringify(products));
    }else {
        response.end('404 page not found.');
    }
});

//绑定端口
server.listen(3000,function () {
 console.log('服务启动成功');
});
