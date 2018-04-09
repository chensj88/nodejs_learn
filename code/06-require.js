//node中的作用域为模块作用域，不同模块间的数据不共享
//需要共享的时候使用exports来定义变量
console.log('a start');
require('./01-helloworld')
console.log('a stop');

var export7 = require('./07-exports')

export7.add(5,6);