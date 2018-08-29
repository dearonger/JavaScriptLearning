//      既然是模块作用域，那如何让模块与模块之间进行通信
//      有时候，我们加载文件模块的目的不是为了简简单单的执行里面的代码，更重要是为了使用里面的某个成员
//  每个文件模块中都提供了一个对象：exports
//   exports默认为一个空对象
//   将所有需要被外部访问的成员 挂载 到 exports 对象中

let bExport = require("./exportFile");
let foo = "2345";

console.log(bExport.foo);
console.log(bExport.age);
console.log(bExport.add(10, 20));
