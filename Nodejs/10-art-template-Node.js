// 在 Node 中使用 art-template 模板引擎
// 模板引擎最早就是诞生于服务器领域，后来才发展到了前端。
//
// 1. 安装 npm install art-template
// 2. 在需要使用的文件模块中加载 art-template
//    require('art-template')
// 3. 查文档，使用模板引擎的 API

let template = require("art-template");
let fs = require("fs");
fs.readFile("./10'.html", function(err, data) {
  if (err) {
    console.log("Can not found file");
  }
  //默认读到的data是二进制数据，render方法要接收的是字符串
  let tep = template.render(data.toString(), {
    name: "jerry",
    age: 18,
    hobbies: ["play", "eat", "sleep"]
  });
  console.log(tep);
});
