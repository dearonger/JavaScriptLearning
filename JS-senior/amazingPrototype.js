//原型链:实例对象和原型对象之间的关系,通过__proto__来联系
//任何构造函数的原型对象中均有__proto__，只要是__proto__，就会指向该对象所指向的构造函数的原型对象
// var divObj = document.getElementById("dv");
// console.dir(divObj);

//     divObj.__proto__
//     ---->HTMLDivElement.prototype  它的__proto__
//     --->HTMLElement.prototype  它的__proto__
//     ---->Element.prototype  它的__proto__
//     ---->Node.prototype  它的__proto__
//     ---->EventTarget.prototype  它的__proto__
//     ---->Object.prototype  它没有__proto__
//     所以,Object.prototype中的__proto__是null

//通过原型继承
function Dog(name, weight) {
  this.name = name;
  this.weight = weight;
}
Dog.prototype.eat = function() {
  console.log("meet");
};

function erHa(age) {
  this.age = age;
}
erHa.prototype = new Dog(erHa, 50);
erHa.prototype.play = function() {
  console.log("play");
};
var erHa1 = new erHa(1);
erHa1.eat();
erHa1.play();
