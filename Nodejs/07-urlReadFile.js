let fs = require("fs");
let http = require("http");

let server = http.createServer();

let wwwDir = "/Users/wzh/Projects/JavaScriptLearning/Nodejs";
server.on("request", function(request, response) {
  let url = request.url;
  let filePath = "/01-helloworld.js";
  console.log(url);
  if (url !== "/") {
    filePath = url;
  }
  fs.readFile(wwwDir + filePath, function(err, data) {
    if (err) {
      return response.end("404 not found");
    }
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end(data);
  });
});

server.listen(8000, function() {
  console.log("servers is running");
});
