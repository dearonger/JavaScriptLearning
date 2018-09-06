//调用系统的构造函数Object(),创建对象
function createObject(name, age) {
  var obj = new Object();
  obj.Name = name;
  obj.Age = age;
  obj.sayHi = function() {
    console.log(
      "hello,my name is " + this.Name + ", I'm " + this.Age + "years old."
    );
  };
  return obj;
}
var per1 = createObject("tom", 18);
var per2 = createObject("joson", 20);

per1.sayHi();
console.log(per1 instanceof obj); //报错
console.log(per1 instanceof Object); //true
per2.sayHi();

//自定义构造函数创建对象  ❗️构造函数与函数本质上没有区别，主要还命名的区别，构造函数首字母大写
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log(
      "hello,my name is " + this.Name + ", I'm " + this.Age + "years old."
    );
  };
}
// 要创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下 4
// 个步骤：
// (1) 创建一个新对象（分配空间）；
// (2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象） ；
// (3) 执行构造函数中的代码（为这个新对象添加属性） ；
// (4) 返回新对象。
var per1 = new Person("tom", 18);
per1.sayHi();
console.log(per1 instanceof Person); //true  ❗️与17、18行代码比较自定义构造函数区别

//字面量的方式创建对象 缺陷：想修改属性值时，需要重新赋值（一次性对象，无法传值）
var obj = {
  name: "tom",
  age: "10",
  sayHi: function() {
    console.log("hello, I'm " + this.name);
  }
};
obj.sayHi();

//对象是无序属性与方法组成的集合，遍历对象要用 for—in 循环
// ❗️注意：对象中确实有该属性时，用obj.name，或者obj["name"]
//        若没有，要用obj[str] 如第64行
var obj = new Object();
obj.Name = "name";
obj.Age = 18;
obj.sayHi = function() {
  console.log(
    "hello,my name is " + this.Name + ", I'm " + this.Age + "years old."
  );
};
//key是一个变量，该变量中存储的是对象的属性名
for (var key in obj) {
  console.log(key + " :  " + obj[key]); //❗️key中存储的是obj对象中属性或方法的名字
  console.log(obj[key]); //❗️此方法输出的是对象中属性的值或方法代码
}

//对象存储占用两个空间，在堆中存储定义代码，在栈中存储堆中代码的地址  引用类型值传递
function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}
function f1(person) {
  //该语句将修改实参的内容
  person.name = "ls";

  //该语句将 person 中存储的地址改变了，但是不会改变实参的内容
  person = new Person("aa", 18, 1000);
}
var p = new Person("za", 18, 10);
f1(p);
console.log(p.name); //❗️输出ls

//随机产生一个十六进制的随机颜色
function getColor() {
  var str = "#";
  var arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];
  for (var i = 0; i < 6; i++) {
    //产生随机索引 str1
    var str1 = parseInt(Math.random() * 16);
    str += arr[str1];
  }
  return str;
}
console.log(getColor());
// //页面加载事件
// window.onload = function() {
//   document.getElementsByClassName(
//     "thumbnail angular-youtube-wrapper"
//   ).style.backgroundColor = getColor();
// };

//Date对象的使用
var date = new Date();
date.getFullYear(); //年
date.getMonth(); //月-----从0开始
date.getDate(); //日
date.getDay(); //星期-----从0开始
date.getHours(); //小时
date.getMinutes(); //分钟
date.getSeconds(); //秒
date.toLocaleDateString(); // 年/月/日 格式
date.toDateString(); //美式时间
date.toLocaleTimeString(); // 时：分：秒 上午/下午 格式
date.toTimeString(); //时间
date.valueOf(); //毫秒

//格式化日期和时间
function getTime(date) {
  var month = dat.getMonth() + 1;
  var day = dat.getDate();
  month = month > 10 ? month : "0" + month;
  day = day > 10 ? day : "0" + day;
  return (
    dat.getFullYear() +
    "年" +
    month +
    "月" +
    day +
    "日" +
    "   " +
    dat.toLocaleTimeString()
  );
}
console.log(getTime(new Date()));
