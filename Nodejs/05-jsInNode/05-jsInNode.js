/**
 * fs 文件操作模块
 * http 网络服务构建模块
 * os 操作系统信息模块
 * path 路径处理模块
 */

//用来获取机器信息的
let os = require("os");

//用来操作路径
let path = require("path");

//获取CPU信息
console.log(os.cpus());
//获取内存大小
console.log(os.totalmem());

//获取扩展名
console.log(path.extname("hello.txt"));

// require 是一个方法，该方法有两个作用
//    1.加载模块文件并执行里面的代码
//    2.拿到被加载文件模块导出的接口对象
//在 Node 中，没有全局作用域，只有模块作用域
//      外部访问不到内部
//      内部也访问不到外部
//      默认都是封闭的

// 在 Node 中，模块有三种：
//    1.具名的核心模块，例如 fs、http
//    2.用户自己编写的文件模块
//      相对路径必须加 ./
//      可以省略后缀名
//    3.第三方模块
//

let foo = "aaa";

console.log("a start");

function add(x, y) {
  return x + y;
}

// 可以
// require('./b.js')

// 文件模块 b
//推荐：可以省略后缀名
//require("./b");   //b 中有foo变量 也不会影响最后的输出

console.log("a end");

console.log("foo 的值是：", foo);

//      既然是模块作用域，那如何让模块与模块之间进行通信
//      有时候，我们加载文件模块的目的不是为了简简单单的执行里面的代码，更重要是为了使用里面的某个成员
//  每个文件模块中都提供了一个对象：exports
//   exports默认为一个空对象
//   将所有需要被外部访问的成员 挂载 到 exports 对象中

//Ip地址用来定位计算机
//端口号用来定位具体的应用程序， 所有需要互联网通信的应用都会占用一个端口号
let http = require("http");
let server = http.createServer();

server.on("request", function(req, res) {
  //端口号
  console.log(req.socket.remotePort);
  //Ip 号
  console.log(req.socket.remoteAddress);
  // 在服务端默认发送的数据，其实是 utf8 编码的内容
  // 但是浏览器不知道你是 utf8 编码的内容
  // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
  // 中文操作系统默认是 gbk
  // 解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
  // 在 http 协议中，Content-Type 就是用来告知对方我给你发送的数据内容是什么类型
  var url = req.url;
  if (url === "/plain") {
    // text/plain 就是普通文本
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("hello 世界");
  } else if (url === "/html") {
    // 如果你发送的是 html 格式的字符串，则也要告诉浏览器我给你发送是 text/html 格式的内容
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end('<p>hello html <a href="">点我</a></p>'); //相当于在html中写入了<p>hello html <a href="">点我</a></p>
  }
});

server.listen(3002, function() {
  console.log("servers is running...");
});
