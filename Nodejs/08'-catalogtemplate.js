let fs = require("fs");
let http = require("http");
let template = require("art-template");
let filePath = "./'template.html";

let server = http.createServer();
server.on("request", function(req, resp) {
  let url = req.url;
  fs.readFile(filePath, function(err, data) {});
});

server.listen(8000, function() {
  console.log("servers is running...");
});
