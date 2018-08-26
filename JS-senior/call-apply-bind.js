/**
 * apply和call均可改变函数的this指向
 *
 * 两者表示方式不同
 *
 * function f1(x,y,z){
 *   renturn x+y+z;
 * }
 * f1.apply(null,[10,20,30])
 * f1.call(null,10,20,30)
 *
 * 此时f1的this值是window
 *
 * var obj=new Object();
 *
 * f1.apply(obj,[10,20,30]);
 * f1.call(obj,10,20,30);
 *
 * 此时f1的this值是object
 *
 * apply的使用语法
 * 函数名字.apply(对象,[参数1,参数2,...]);
 * 方法名字.apply(对象,[参数1,参数2,...]);
 *
 * call的使用语法
 * 函数名字.call(对象,参数1,参数2,...);
 * 方法名字.call(对象,参数1,参数2,...);
 *
 * 作用:改变this的指向
 * 不同的地方:参数传递的方式是不一样的
 *
 * 只要是想使用别的对象的方法,并且希望这个方法是当前对象的,那么就可以使用apply或者是call的方法改变this的指向
 *
 * 所有的函数都是Function的实例对象
 * apply和call方法不在函数这个实例对象中,而是在Function的prototype中
 *
 *
 * bind方法是复制的意思,参数可以在复制的时候传进去,也可以在复制之后调用的时候传入进去
 * apply和call是调用的时候改变this指向
 * bind方法,是复制一份的时候,改变了this的指向
 * 函数名字.bind(对象,参数1,参数2,...);---->返回值是复制之后的这个函数
 * 方法名字.bind(对象,参数1,参数2,...);---->返回值是复制之后的这个方法
 *
 *
 */
//通过对象,调用方法,产生随机数

function ShowRandom() {
  //1-10的随机数
  this.number = parseInt(Math.random() * 10 + 1);
}
//添加原型方法
ShowRandom.prototype.show1 = function() {
  //改变了定时器中的this的指向了,本来应该是window,现在是实例对象了
  window.setInterval(this.show2.bind(this), 1000);
};
//添加原型方法
ShowRandom.prototype.show2 = function() {
  //显示随机数
  console.log(this.number);
};
//实例对象
var sr = new ShowRandom();
//调用方法,输出随机数字
//调用这个方法一次,可以不停的产生随机数字
sr.show1();
