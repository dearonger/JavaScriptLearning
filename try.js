// for (var i = 1; i <= 5; i++) {
//   (function(j) {
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }
// for (let i = 1; i <= 5; i++) {
//   setTimeout(
//     function timer() {
//       console.log(i);
//     },
//     i * 1000,
//     i
//   );
// }
// function findAllOccurrences(arr, target) {
//   let result = [];
//   arr.forEach(function(elemt, index) {
//     if (elemt == target) {
//       result.push(index);
//     }
//   });
//   return result;
// }
// let temp = findAllOccurrences(["a", "b", "a"], "a");
// console.log(temp);

// function findAllOccurrences(arr, target) {
//   var temp = [];
//   arr.forEach(function(val, index) {
//     val !== target || temp.push(index);
//   });
//   return temp;
// }
// let temp = findAllOccurrences("abcdefabc", "a");
// console.log(temp);

// function indexOf(arr, item) {
//   arr.forEach(function(elem, index) {
//     if (elem == item) {
//       return index;
//     } else return -1;
//   });
// // }
// function indexOf(arr, item) {
//   arr.forEach(function(elem) {
//     if (elem == item) {
//       return arr.indexOf(elem);
//     } else return -1;
//   });
// }
// var temp = indexOf([1, 2, 3, 4], 3);
// console.log(temp);
// function append(arr, item) {
//   arr[arr.length] = item;
//   return arr;
// }
// console.log(append([1, 2, 2, 4, 6, 2, 4, 67, 7, 39], 10));
// function duplicates(arr) {
//   var temp = [];
//   var temp1 = [];
//   arr.forEach(function(elem, index) {
//     if (arr.indexOf(elem) != index) {
//       temp.push(elem);
//     }
//   });
//   temp.forEach(function(elem, index) {
//     if (temp.indexOf(elem) == index) {
//       temp1.push(elem);
//     }
//   });
//   return temp1;
// }
// console.log(duplicates([1, 2, 2, 4, 6, 2, 4, 67, 7, 39]));
// function square(arr) {
//   var newArr = arr.map(function(ele) {
//     return ele * ele;
//   });
//   return newArr;
// }
// console.log(square([1, 2, 3]));
// for (let i = 1; i <= 5; i++) {
//   setTimeout(
//     function timer() {
//       console.log(i);
//     },
//     i * 1000,
//     i //第三个参数
//   );
// }

// let a = "20180803dshjfjjr490482dsfdbnd7835";
// function removeRep(a) {
//   //取数字
//   let num = a.match(/\d+/g);
//   let str = "";
//   for (let i = 0; i < num.length; i++) {
//     str += num[i];
//   }
//   //转数组
//   let arr = [];
//   arr = Array.from(str);
//   console.log(arr);
//   let temp = [];
//   //去重
//   arr.forEach(function(elem) {
//     if (temp.indexOf(elem) === -1) {
//       temp.push(elem);
//     }
//   });
//   let arrOdd = [];
//   let arrEven = [];
//   temp.forEach(function(elem) {
//     if (parseInt(elem) % 2 === 0) {
//       arrEven.push(elem);
//     } else arrOdd.push(elem);
//   });
//   arrEven.sort();
//   arrOdd.sort();
//   result = arrOdd.concat(arrEven);
//   return result;
// }
// let b = "njkf34oi 324385ehfwe736r743gtjfkn6s3i8d";
// console.log(removeRep(b));
// var arr5 = [1, 53, 6, 2, 64, 34, 48];
// arr5.sort();
// console.log(arr5); //[1, 2, 34, 48, 53, 6, 64]不稳定

// // ❗️.sort(function)
// arr5.sort(function(a, b) {
//   return a - b;
// });
// console.log(arr5);
//改变原型指向----继承
// function Person(name, age, sex) {
//   this.name = name;
//   this.age = age;
//   this.sex = sex;
// }
// Person.prototype.sayHi = function() {
//   console.log("阿涅哈斯呦");
// };

// function Student(name, age, sex, score) {
//   //借用构造函数:属性值重复的问题
//   Person.call(this, name, age, sex);
//   this.score = score;
// }
// //改变原型指向----继承
// Student.prototype = new Person(); //不传值
// Student.prototype.eat = function() {
//   console.log("吃东西");
// };
// var stu = new Student("小黑", 20, "男", "100分");
// console.log(stu.name, stu.age, stu.sex, stu.score);
// stu.sayHi();
// stu.eat();
// var stu2 = new Student("小黑黑", 200, "男人", "1010分");
// console.log(stu2.name, stu2.age, stu2.sex, stu2.score);
// stu2.sayHi();
// stu2.eat();

// ❗️❗️let n = read_line();
// let r = "";
// let arr = new Array();
// let item = new Array();
// let sumF = 0;
// let sumT = 0;
// let maxF = 0;
// let maxT = 0;
// for (let i = 0; i < n; i++) {
//   r = read_line();
//   arr[i] = r.split(" ");
//   for (let j = 0; j < 4; j++) {
//     arr[i][j] = parseInt(arr[i][j]);
//   }
// }
// //遍历，找最高分值的题目，记录分值与做题时间，在剩余时间内，找最高分值的题目(递归)
// function getF(arr, time) {
//   if (time <= 10) {
//     return sumF;
//   }
//   for (let m = 0; m < n; m++) {
//     for (let k = 1; k < 4; k = k + 2) {
//       if (arr[m][k] > maxF && arr[m][k - 1] < time) {
//         maxF = arr[m][k];
//         maxT = arr[m][k - 1];
//       }
//     }
//   }

//   return sumF + getF(arr, 120 - maxT);
// }
// getF(arr, 120);
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
