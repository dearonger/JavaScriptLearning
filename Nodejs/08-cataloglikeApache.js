let http = require("http");
let fs = require("fs");
let template = require("art-template");

let server = http.createServer();
let filePath = "./template.html";
let wwwDir = "/Users/wzh/Projects/JavaScriptLearning/Nodejs";
server.on("request", function(req, resp) {
  let url = req.url;
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return resp.end("404 Not Found");
    }
    // 1. 如何得到 wwwDir 目录列表中的文件名和目录名
    //    fs.readdir
    // 2. 如何将得到的文件名和目录名替换到 template.html 中
    //    2.1 在 template.html 中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
    //    2.2 根据 files 生成需要的 HTML 内容
    fs.readdir(wwwDir, function(err, files) {
      if (err) {
        return resp.end("www dir is not found");
      }
      // 2.1 生成需要替换的内容
      let content = "";
      console.log(files);
      files.forEach(function(item) {
        // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
        content += `
          <tr>
            <td data-value="/"><a class="icon dir" href="/Users/wzh/Projects/JavaScriptLearning/Nodejs/">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
          </tr>
        `;
      });
      let dat = data.toString();
      dat = dat.replace("^_^", content);
      resp.end(dat);
    });
  });
});

server.listen(8000, function() {
  console.log("server is running...");
});
