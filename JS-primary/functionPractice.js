//求 m 与 n 之间所有不能被7整除的整数的和
function sumDivision7(m, n) {
  var sum = 0;
  for (var i = m; i <= n; i++) {
    if (i % 7 != 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumDivision7(100, 200));

//判断一个数是否是质数（只能被1和自身整除）
function primeNumber(m) {
  for (var i = 2; i < m / 2; i++) {
    if (m % i != 0) {
      continue;
    } else {
      console.log(m + "不是质数");
      return false;
    }
  }
  console.log(m + "是质数");
}
var number = parseInt(prompt("请输入数字："));
primeNumber(number);

// 在函数前输入 /** + Enter 可以写函数注释，在别处调用函数时，cmd+鼠标左键点击函数名，可以找到函数定义。
/**
 *
 * @param {*} num 参数是用来判断是否是质数的数，实现···功能
 *
 */
//方法2
function isPrimeNumber(num) {
  for (var i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      //说明不是质数
      return false;
    }
  }
  return true;
}
var number = parseInt(prompt("请输入数字："));
console.log(isPrimeNumber(number) ? number + "是质数" : number + "不是质数");

//求斐波那契数列
function getFib(num) {
  var num1 = 1;
  var num2 = 1;
  var sum = 0;
  for (var i = 3; i <= num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return sum;
}
getFib(2);

//输入年月日，输出该日期是这一年的第几天
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
function getDays(year, month, day) {
  var days = day;
  //如果是一月，直接输出day的值
  if (month == 1) {
    return days;
  }
  //如果执行到这里说明不是一月
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (var i = 0; i < month - 1; i++) {
    days += months[i];
  }
  //判断年份是否是闰年
  if (isLeapYear(year) && month > 2) {
    days++;
  }
  return days;
}
getDays(2003, 3, 2);

//arguments的使用（伪数组）求若干个数字的累加和
function f1() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(f1(1, 3, 5));

//匿名函数的使用
var fi = function() {
  console.log("匿名函数");
}; //此处的分号不可省略
f1();

//预解析问题
f1();
//预解析，函数定义与变量声明会提前，变量赋值不会提前。先提升var，再提升function
//变量提升只会在当前作用域中
function f1() {
  console.log("hello world!");
  console.log(a);
  var a = 10;
}
//输出结果会是 hello world!
//           undefined

//调用f2时，输出num2的值为 undefined
var num2 = 20;
function f2() {
  console.log(num2);
  var num2 = 30;
}

//预解析问题 练习2
f1();
console.log(a); //报错
console.log(b); //9
console.log(c); //9
function f1() {
  var a = (b = c = 9);
  console.log(a); //9
  console.log(b); //9
  console.log(c); //9
}
//var a=b=c=9相当于：
//var a=9; b=9; c=9; 其中a有声明，而 b 与 c 则为隐式全局变量

//获取数据类型的方法以及函数作为返回值使用
var num = 10;
console.log(typeof num); //获取num这个变量的数据类型
var obj = {}; //对象
//判断这个对象是不是某个类型的
console.log(obj instanceof Object);
//获取某个对象的数据类型的样子
//此时得到的就是这个对象的类型
Object.prototype.toString.call(obj);
//输出的是Object的数据类型   [object Object]

console.log(Object.prototype.toString.call([]));
//输出的数组的数据类型      [object Array]
var arr = [10, 20, 30];
console.log(Object.prototype.toString.call(arr));

console.log(Object.prototype.toString.call(new Date()));

//获取某个对象的类型是不是你传入的类型
//[10,20,30] 是不是"[object Array]"
//type---是变量----是参数----"[object Array]"
//obj---是变量-----是参数----[10,20,30];

//判断这个对象和传入的类型是不是同一个类型
function getFunc(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === type;
  };
}

var ff = getFunc("[object Array]"); //ff作为getFunc的返回值，其中ff是函数
var result = ff([10, 20, 30]); //ff也有参数
console.log(result);

var ff1 = getFunc("[object Object]");
var dt = new Date();
var result1 = ff1(dt);
console.log(result1); //false

let a = "20180803dshjfjjr490482dsfdbnd7835";
//取出数字，去重，奇数偶数分开。
function removeRep(a) {
  //取数字
  let num = a.match(/\d+/g); // num = ['20180803','490482','7835']
  let str = "";
  for (let i = 0; i < num.length; i++) {
    str += num[i]; //str = ['201808034904827835']
  }
  //转数组
  let arr = [];
  //将 str 变为数组
  arr = Array.from(str); //arr = ['2','0','1','8','0','8','0','3','4','9','0','4','8','2','7','8','3','5'];
  let temp = [];
  //去重
  arr.forEach(function(elem) {
    if (temp.indexOf(elem) === -1) {
      temp.push(elem);
    }
  });

  //去重
  // let s = new Set();
  // arr.forEach(elem=>s.add(elem));
  //Array.from方法可以将 Set 结构转为数组。

  let arrOdd = [];
  let arrEven = [];
  temp.forEach(function(elem) {
    if (parseInt(elem) % 2 === 0) {
      arrEven.push(elem);
    } else arrOdd.push(elem);
  });
  arrEven.sort();
  arrOdd.sort();
  result = arrOdd.concat(arrEven);
  return result;
}
let b = "njkf34oi 324385ehfwe736r743gtjfkn6s3i8d";
console.log(removeRep(b));

//❗️js数组去重十一种方式

//一、利用ES6中的Set 无法去掉“{}”空对象
function removeRept1(arr) {
  return Array.from(new Set(arr));
}

//二、利用双层for循环，splice去重
function removeRept2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

//三、利用indexOf去重
function removeRept3(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) !== -1) {
      array.push(arr[i]);
    }
  }
  return array;
}

//四、利用sort去重
function removeRept4(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  arr = arr.sort();
  let array = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      array.push(arr[i]);
    }
  }
  return array;
}

//五、利用对象的属性不能相同的特点进行去重
function removeRept5(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  let obj = {};
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      array.push(arr[i]);
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++; //侧面反映了出现次数
    }
  }
  return array;
}

//六、利用includes检测数组是否有某个值
function removeRept6(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
}

//七、利用hasOwnProperty
//❗️o(n)时间复杂度 实现去重
//利用object的键是唯一的这一属性实现 hasOwnProperty
function removeRept7_1(array) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    //.hasOwnProperty()用来判断对象中是否有某个属性，把内容作为键值存入对象
    if (!obj.hasOwnProperty(array[i])) {
      obj[array[i]] = 1;
      arr.push(array[i]);
    }
  }
  return arr;
}
//或者
function removeRept7_2(arr) {
  var obj = {};
  return arr.filter(item => {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}

//八、利用filter,当前元素，在原始数组中的第一个索引==当前索引值
function removeRept8(arr) {
  return arr.filter(item => {
    return arr.indexOf(item) === index;
  });
}

//九、利用Map数据结构去重,Map中不会出现相同的key值
function removeRept9(arr) {
  let map = new Map();
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // 如果有该key值
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false);
      array.push(arr[i]);
    }
  }
  return array;
}

//十、利用[...new Set(arr)] 与第一种类似
function removeRept10(arr) {
  return [...new Set(arr)];
}

//十一、利用reduce ❓❓❓
Array.prototype.removeRept11 = function() {
  let sortArr = this.sort();
  let array = [];
  sortArr.reduce((s1, s2) => {
    if (s1 !== s2) {
      array.push(s1);
    }
    return s2;
  });
  array.push(sortArr[sortArr.length - 1]);
  return array;
};

console.log(
  removeRept_([
    1,
    2,
    [],
    {},
    1,
    34,
    3,
    [1, 2, 3],
    {},
    { a: 1, b: 2 },
    6,
    84,
    5,
    { a: 1, b: 2 },
    [3, 2, 1],
    6,
    2,
    [1, 2, 3]
  ])
);
