let fs = require("fs");
let http = require("http");
let template = require("art-template");
let filePath = "./'template.html";
let wwwDir = "/Users/wzh/Projects/JavaScriptLearning/Nodejs";

let server = http.createServer();
server.on("request", function(req, resp) {
  let url = req.url;
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return resp.end("404 Not Found");
    }
    fs.readdir(wwwDir, function(err, file) {
      if (err) {
        return resp.end("404 Not Found");
      }
      //只需要使用模板引擎解析替换 data 中的模板字符串就可以了
      let dat = template.render(data.toString(), {
        title: "JavaScript/Nodejs/ 的索引(template)",
        files: file
      });
      resp.end(dat);
    });
  });
});

server.listen(8000, function() {
  console.log("servers is running...");
});
