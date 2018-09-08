//JS 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象（Object）。
//❗️基本类型有六种： null，undefined，boolean，number，string，symbol。

// 要创建一个新实例，使用 new 操作符。以这种方式调用构造函数实际上会经历以下 4
// 个步骤：
// (1) 创建一个新对象（分配空间）；
// (2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象） ；
// (3) 执行构造函数中的代码（为这个新对象添加属性） ；
// (4) 返回新对象。

//❗️箭头函数其实是没有 ❗️this 的，这个函数中的 this 只取决于他外面的第一个不是箭头函数的函数的 this。
function a() {
  return () => {
    return () => {
      console.log(this);
    };
  };
}
console.log(a()()()); //this 是 window

//❗️执行上下文
//因为当 JS 解释器在遇到❗️非匿名的立即执行函数时，会创建一个辅助的特定对象，
//然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 foo，
//但是这个值又是只读的，所以对它的赋值并不生效，
//所以打印的结果还是这个函数，并且外部的值也没有发生更改。
var foo = 1(
  (function foo() {
    foo = 10;
    console.log(foo);
  })()
); // -> ƒ foo() { foo = 10 ; console.log(foo) }

//❗️闭包  定义很简单：函数 A 返回了一个函数 B，
//并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。
//经典面试题，循环中使用闭包解决 var 定义函数的问题

//方法一：闭包
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

//方法二：使用let 形成块级作用域❓
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

//方法三：使用setTimeout的第三个参数
for (let i = 1; i <= 5; i++) {
  setTimeout(
    function timer() {
      console.log(i);
    },
    i * 1000,
    i //第三个参数
  );
}

// ❗️❗️❗️异步加载js外部文件
// 1️⃣ defer 它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本

// defer属性的运行流程如下:
// 浏览器开始解析 HTML 网页。
// 解析过程中，发现带有defer属性的<script>元素。
// 浏览器继续往下解析 HTML 网页，同时并行下载<script>元素加载的外部脚本。
// ❗️浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。

//下载的脚本文件在DOMContentLoaded事件触发前执行（即刚刚读取完</html>标签），
//而且可以保证执行顺序就是它们在页面上出现的顺序。

// 2️⃣ async  使用另一个进程下载脚本，下载时不会阻塞渲染
// async 属性的运行流程如下:
// 浏览器开始解析 HTML 网页。
// 解析过程中，发现带有async属性的script标签。
// 浏览器继续往下解析 HTML 网页，同时并行下载<script>标签中的外部脚本。
// ❗️脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
// ❗️脚本执行完毕，浏览器恢复解析 HTML 网页。

//一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本

//区别：
//defer属性和async属性到底应该使用哪一个？

//一般来说，如果脚本之间没有依赖关系，就使用async属性，
//如果脚本之间有依赖关系，就使用defer属性。如果同时使用async和defer属性，
//后者不起作用，浏览器行为由async属性决定。

// 3️⃣ <script>元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载。
["a.js", "b.js"].forEach(function(src) {
  var script = document.createElement("script");
  script.src = src;
  script.async = false; //保证了代码的执行顺序 先 a ,后 b 。
  document.head.appendChild(script);
});

// ❗️浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）。

//渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档。

//不同的浏览器有不同的渲染引擎。
// Firefox：Gecko 引擎
// Safari：WebKit 引擎
// Chrome：Blink 引擎
// IE: Trident 引擎
// Edge: EdgeHTML 引擎

// ❗️渲染引擎处理网页，通常分成四个阶段。

// 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
// 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
// 布局：计算出渲染树的布局（layout）。
// 绘制：将渲染树绘制到屏幕。
// 以上四步并非严格按顺序执行，往往第一步还没完成，第二步和第三步就已经开始了。
//所以，会看到这种情况：网页的 HTML 代码还没下载完，但浏览器已经显示出内容了。
