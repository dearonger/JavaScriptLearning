//嵌套 6s
function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果"); //直接执行
  setTimeout(function() {
    callback(arg * 2); //等一秒后执行
  }, 1000);
}
function final(value) {
  console.log("完成: ", value);
}

async(1, function(value) {
  async(value, function(value) {
    async(value, function(value) {
      async(value, function(value) {
        async(value, function(value) {
          async(value, final);
        });
      });
    });
  });
});
//运行结果：
// 参数为 1 , 1秒后返回结果
// 参数为 2 , 1秒后返回结果
// 参数为 4 , 1秒后返回结果
// 参数为 8 , 1秒后返回结果
// 参数为 16 , 1秒后返回结果
// 参数为 32 , 1秒后返回结果
// 完成:  64

//串行 6s
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function() {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}
//流程控制函数
function series(item) {
  if (item) {
    async(item, function(result) {
      results.push(result);
      return series(items.shift()); //流程控制
    });
  } else {
    return final(results[results.length - 1]);
  }
}

series(items.shift()); //.shift(ele)  从数组中删除第一个元素，并返回该元素的值
//输出
// 参数为 1 , 1秒后返回结果
// 参数为 2 , 1秒后返回结果
// 参数为 3 , 1秒后返回结果
// 参数为 4 , 1秒后返回结果
// 参数为 5 , 1秒后返回结果
// 参数为 6 , 1秒后返回结果
// 完成:  12

//并行执行 1s 但很容易耗尽系统资源
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function() {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}
//forEach方法会同时发起六个异步任务，等到它们全部完成以后，才会执行final函数
items.forEach(function(item) {
  async(item, function(result) {
    results.push(result);
    if (results.length === items.length) {
      final(results[results.length - 1]);
    }
  });
});
//输出
// 参数为 1 , 1秒后返回结果 |
// 参数为 2 , 1秒后返回结果 |
// 参数为 3 , 1秒后返回结果 |=====>立即输出， 等一秒后 12 输出
// 参数为 4 , 1秒后返回结果 |
// 参数为 5 , 1秒后返回结果 |
// 参数为 6 , 1秒后返回结果 |
// 完成:  12

//并行与串行的结合 处在串行执行和并行执行之间 3s
//通过调节limit变量，达到效率和资源的最佳平衡
var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function() {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}

function launcher() {
  while (running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function(result) {
      results.push(result);
      running--;
      if (items.length > 0) {
        launcher();
      } else if (running == 0) {
        final(results[results.length - 1]);
      }
    });
    running++;
  }
}

launcher();
//输出
// 参数为 1 , 1秒后返回结果 |
// 参数为 2 , 1秒后返回结果 |=====>输出， 等一秒后 3,4 输出
// 参数为 3 , 1秒后返回结果 |
// 参数为 4 , 1秒后返回结果 |=====>输出， 等一秒后 5,6 输出
// 参数为 5 , 1秒后返回结果 |
// 参数为 6 , 1秒后返回结果 |
// 完成:  12
