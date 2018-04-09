//node 构建服务器
//node 中提供了一个核心模块http
//http 这个模块的职责就是帮你创建一个web服务器

var http = require('http');
//创建一个Web服务器，返回一个server
var  server = http.createServer();

//接收请求
//request 请求事件处理函数，需要接收2个参数
   //request  请求对象
   //  请求对象可以获取客户端的一些请求消息，比如请求对象
   //response 响应对象
  //响应对象可以用来给客户端发送响应信息
server.on('request',function (request,response) {
 console.log('接收到客户端请求'+request.url);

 //response对象有一个方法，write可以用来给客户端发送响应数据
 //write可以写出多次，必须以end结束
    response.write('hello<br>');
    response.write('nodejs<br>');
    response.write('hello nodejs<br>');
    response.end(); //告诉客户端已经结束，可以查看了
});

//绑定端口
server.listen(3000,function () {
 console.log('服务启动成功');
});
