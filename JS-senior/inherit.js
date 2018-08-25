//为了数据共享,改变原型指向,做到了继承---通过改变原型指向实现的继承
//缺陷:因为改变原型指向的同时实现继承,直接初始化了属性，继承过来的属性的值都是一样的了,所以,这就是问题
//只能重新调用对象的属性进行重新赋值,

//解决方案:继承的时候,不用改变原型的指向,直接调用父级的构造函数的方式来为属性赋值就可以了------借用构造函数:把要继承的父级的构造函数拿过来,使用一下就可以了

//借用构造函数:构造函数名字.call(当前对象,属性,属性,属性....);
//解决了属性继承,并且值不重复的问题
//缺陷:父级类别中的方法不能继承

function Person(name, age, sex, weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.weight = weight;
}
Person.prototype.sayHi = function() {
  console.log("您好");
};
function Student(name, age, sex, weight, score) {
  //借用构造函数
  Person.call(this, name, age, sex, weight);
  this.score = score;
}
var stu1 = new Student("小明", 10, "男", "10kg", "100");
console.log(stu1.name, stu1.age, stu1.sex, stu1.weight, stu1.score);

var stu2 = new Student("小红", 20, "女", "20kg", "120");
console.log(stu2.name, stu2.age, stu2.sex, stu2.weight, stu2.score);

//组合继承:原型继承+借用构造函数继承

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Person.prototype.sayHi = function() {
  console.log("阿涅哈斯呦");
};
function Student(name, age, sex, score) {
  //借用构造函数:属性值重复的问题
  Person.call(this, name, age, sex);
  this.score = score;
}
//改变原型指向----继承
Student.prototype = new Person(); //不传值
Student.prototype.eat = function() {
  console.log("吃东西");
};
var stu = new Student("小黑", 20, "男", "100分");
console.log(stu.name, stu.age, stu.sex, stu.score);
stu.sayHi();
stu.eat();
var stu2 = new Student("小黑黑", 200, "男人", "1010分");
console.log(stu2.name, stu2.age, stu2.sex, stu2.score);
stu2.sayHi();
stu2.eat();

//属性和方法都被继承了

//拷贝继承；把一个对象中的属性或者方法直接复制到另一个对象中
function Person() {}
Person.prototype.age = 10;
Person.prototype.sex = "男";
Person.prototype.height = 100;
Person.prototype.play = function() {
  console.log("玩的好开心");
};

var obj2 = {};
//Person的构造中有原型prototype,prototype就是一个对象,那么里面,age,sex,height,play都是该对象中的属性或者方法
for (var key in Person.prototype) {
  //浅拷贝
  obj2[key] = Person.prototype[key];
}
console.dir(obj2);
obj2.play();
