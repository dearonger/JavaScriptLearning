// 把当前模块所有的依赖项都声明再文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
// /public 整个 public 目录中的资源都允许被访问
let http = require("http");
let fs = require("fs");
let url = require("url");
let template = require("art-template");
let comments = [
  {
    name: "张三",
    message: "今天天气不错！",
    dateTime: "2015-10-16 17:11:24"
  },
  {
    name: "张三2",
    message: "今天天气不错！",
    dateTime: "2015-10-17 17:11:24"
  },
  {
    name: "张三3",
    message: "今天天气不错！",
    dateTime: "2015-10-18 17:11:24"
  },
  {
    name: "张三4",
    message: "今天天气不错！",
    dateTime: "2015-10-19 17:11:24"
  }
];

http
  // 简写方式，该函数会直接被注册为 server 的 request 请求事件处理函数
  .createServer(function(req, resp) {
    // 使用 url.parse 方法将路径解析为一个对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
    let pathObj = url.parse(req.url, true);
    // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
    let pathname = pathObj.pathname;

    if (pathname === "/") {
      fs.readFile("./views/index.html", function(err, data) {
        if (err) {
          console.log("index err");
          return resp.end("404 Not Found");
        }
        let dat = template.render(data.toString(), {
          comments: comments
        });
        resp.end(dat);
      });
    } else if (pathname === "/post") {
      fs.readFile("./views/post.html", function(err, data) {
        if (err) {
          console.log("post err");
          return resp.end("404 Not Found");
        }
        resp.end(data);
      });
    } else if (pathname === "/review") {
      // 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
      // 所以你不可能通过去判断完整的 pathname 路径来处理这个请求
      // 结论：对于我们来讲，其实只需要判定，如果你的请求路径是 /review 的时候，那我就认为你提交表单的请求过来了

      // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
      // 所以接下来要做的就是：
      //    1. 获取表单提交的数据 parseObj.query
      let comment = pathObj.query;
      //    2. 将当前时间日期添加到数据对象中，然后存储到数组中
      let date = new Date();
      comment.dateTime = date.toLocaleString();
      comments.unshift(comment);
      //    3. 让用户重定向跳转到首页 /
      //       当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了

      // 如何通过服务器让客户端重定向？
      //    1. 状态码设置为 302 临时重定向
      //        statusCode
      //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
      //        setHeader
      // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
      // 所以你就能看到客户端自动跳转了
      resp.statusCode = 302;
      resp.setHeader("Location", "/");
      resp.end();
    }
    // 统一处理：
    //    如果请求路径是以 /public/ 开头的，则认为要获取 public 中的某个资源
    //    直接可以把请求路径当作文件路径来直接进行读取
    else if (pathname.indexOf("/public/") === 0) {
      fs.readFile("." + pathname, function(err, data) {
        if (err) {
          console.log("public err"); //Why？
          return resp.end("404 Not Found");
        }
        resp.end(data);
      });
    } else {
      fs.readFile("./views/404.html", function(err, data) {
        if (err) {
          return resp.end("404 Not Found");
        }
        resp.end(data);
      });
    }
    // let dat = template.render(data.toString(), {});
    // console.log(dat);
  })

  .listen(8000, function() {
    console.log("server is running...");
  });
