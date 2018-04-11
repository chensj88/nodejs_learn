/**
 node 读写文件
*/
// 在Node中如果想进行文件操作，需要引入fs这个核心模块
//在fs这个核心模块中提供了所有的文件操作相关的API
//fs.readFile就是读取文件

var fs = require('fs');

/**
* 读取文件
  第一个参数 就是文件路径
  第二个参数，就是回调参数
   参数为两个 data和error
   成功：
     data：数据
     error：null
   失败：
      data：null
      error:错误对象
*/
fs.readFile('./data/a.txt', function(error,data) {
 /*console.log('读文件：'+error);*/
 if(!error){
     console.log(data); //读取的信息 是二进制信息
     console.log(data.toString());
 }else{
  console.log('读取文件失败');
 }

});
/**
 *参数1:路径
 * 参数2：写入内容
 * 参数3：回调函数
 */

fs.writeFile('./data/test.md','write file',function (error) {
   if(error){
       console.log('写文件：'+error);
   }else{
    console.log('文件书写成功');
   }

});


