//Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。
//它起到代理作用（proxy），充当异步操作与回调函数之间的中介，
//使得异步操作具备同步操作的接口。
//Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。
//Promise 实例有一个then方法，用来指定下一步的回调函数。
function f1(resolve, reject) {
  // 异步代码...
}
//f1的异步操作执行完成，就会执行f2
var p1 = new Promise(f1);
p1.then(f2);

// Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。
// 异步操作未完成（pending）
// 异步操作成功（fulfilled）
// 异步操作失败（rejected）
// 三种状态里面，fulfilled和rejected合在一起称为resolved（已定型）。

// 这三种的状态的变化途径只有两种。
// 从“未完成”到“成功”
// 从“未完成”到“失败”
// 一旦状态发生变化，就凝固了，不会再有新的状态变化。
var promise = new Promise(function(resolve, reject) {
  // ...

  if (/* 异步操作成功 */ a) {
    //为了不报错加了个 a
    resolve(value);
  } else {
    /* 异步操作失败 */
    reject(new Error());
  }
});

//下面代码中，timeout(100)返回一个 Promise 实例。
//100毫秒以后，该实例的状态会变为fulfilled。
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}
timeout(100).then(value => {
  console.log(value);
});

//Promise 新建后就会立即执行。
let promise = new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve();
});
promise.then(function() {
  console.log("resolved.");
});
console.log("Hi!");
// Promise
// Hi!
// resolved
