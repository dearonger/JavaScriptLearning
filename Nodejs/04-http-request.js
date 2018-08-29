var http = require("http");

var server = http.createServer();

// request 请求事件处理函数，需要接收两个参数：
//    Request 请求对象
//        请求对象可以用来获取客户端的一些请求信息，例如请求路径
//    Response 响应对象
//        响应对象可以用来给客户端发送响应消息
server.on("request", function(request, response) {
  // http://127.0.0.1:3000/ /
  // http://127.0.0.1:3000/a /a
  // http://127.0.0.1:3000/foo/b /foo/b
  console.log("收到客户端的请求了，请求路径是：" + request.url); // URL:统一资源定位符 端口号之后的部分
  switch (request.url) {
    case "/":
      {
        // response 对象有一个方法：write 可以用来给客户端发送响应数据
        // write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
        response.write("hello ,");
        response.write(" Welcom to node's world!");
        // 告诉客户端，我的话说完了，你可以呈递给用户了
        response.end();
        //❗️一般直接写成：response.end("hello ,Welcom to node's world!");
      }
      break;
    case "/login":
      {
        response.end("hello , Welcom to back!");
      }
      break;
    case "/register":
      {
        response.end("hello , Welcom register");
      }
      break;
    case "/product": {
      //响应内容只能是二进制数据或者是字符串，其余类型数据均不可
      let product = [
        {
          name: "iphoneX",
          price: 8000
        },
        {
          name: "apple",
          price: 8
        },
        {
          name: "food",
          price: 80
        }
      ];
      response.end(JSON.stringify(product)); //可访问到数据
    }
    default:
      response.end(" 404 Not Found");
      break; //❗️ request.url = "/"; 为什么不可行？
  }
});

server.listen(3001, function() {
  console.log("服务器启动成功了，可以通过 http://127.0.0.1:3001/ 来进行访问");
});
