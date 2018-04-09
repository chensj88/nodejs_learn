/*
  核心模块：
    nodejs为JavaScript提供了许多服务器级别的API，这些API绝大多数都被包装到一个具体的核心模块中
      例如文件操作的fs 核心模块，http服务构建模块，path路径操作模块等
  如果需要一个核心模块，就需要使用require来引入这个模块
  可以参考Nodejs官方Doc；https://nodejs.org/dist/latest-v9.x/docs/api/
 */

var os = require('os');
//处理路径信息
var path = require('path');

console.log(os.cpus());
console.log(os.totalmem()); 