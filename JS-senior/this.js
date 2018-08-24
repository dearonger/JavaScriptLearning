/*
 * 函数中的this的指向
 * 
 * BOM:中顶级对象是window,浏览器中所有的东西都是window的
 * 普通函数中的this是谁?-----window
 * 对象.方法中的this是谁?----当前的实例对象
 * 定时器方法中的this是谁?----window
 * 构造函数中的this是谁?-----实例对象
 * 原型对象方法中的this是谁?---实例对象
 * 
 */

//普通函数;
function f1() {
  console.log(this);
}
f1();

//定时器中的this;
setInterval(function() {
  console.log(this);
}, 1000);

//构造函数;
function Person() {
  console.log(this);
  对象的方法;
  this.sayHi = function() {
    console.log(this);
  };
}
//原型中的方法;
Person.prototype.eat = function() {
  console.log(this);
};
var per = new Person();
console.log(per);
per.sayHi();
per.eat();
