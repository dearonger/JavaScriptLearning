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
