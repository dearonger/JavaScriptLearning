//实际开发多采用的登录方式
var userName = prompt("Please input your user name");
var userPwd = prompt("Please input your password");

while (userName != "admin" || userPwd != "123") {
  //变量重新赋值
  userName = prompt("Please input your user name");
  userPwd = prompt("Please input your password");
}
console.log("Succeed");

//有用户提示语时多采用do-while循环
do {
  //将用户的输入结果存储到result变量中
  var result = prompt("Do think this picture looks good? Y/N");
} while (result != "Y"); //String类型
console.log("Think you!");

//求100以内所有3的倍数的和 while
var i = 0;
var sum = 0;
while (i <= 100) {
  if (i % 3 == 0) {
    sum += i;
  }
  i++;
}
console.log(sum);

//for循环输出乘法口诀表
for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("i'*'j=i*j");
  }
}

//斐波那契 想知道一年之内一对兔子能繁殖多少对兔子。已知一对兔子一个月可以生一对小兔子，
//而一对兔子从出生后第三个月起每个月生一对小兔子，假如没有死亡，问一对兔子一年能繁殖多少对兔子?（1，1，2，3，5，8···）
var num1 = 1; //第一个月的
var num2 = 1; //第二个月的
var sum = 0;
//从第三个月开始计算 斐波那契数列
for (var i = 3; i <= 12; i++) {
  sum = num1 + num2;
  num1 = num2;
  num2 = sum;
}
console.log(sum);

//求1~100的累加值，但要求碰到个位数为3的数则停止
var sum = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 10 != 3) {
    sum += i;
  } else break;
}
console.log(sum);

//方法2
var sum = 0;
var i = 1;
while (i % 10 != 3) {
  sum += i;
  i++;
}
console.log(sum);

//求1~100的累加值，但要求跳过个位数为3的数
var sum = 0;
var i = 1;
while (i <= 100) {
  if (i % 10 == 3) {
    i++;
    continue;
  }
  sum += i;
  i++;
}
console.log(sum);

//去掉数组中重复的的 0(某个数字），将其余数据存放在新数组中
var arry = [10, 0, 20, 0, 30, 0, 50];
var NewArry = [];
for (var i = 0; i < arry.length; i++) {
  if (arry[i] != 0) {
    //把新数组的长度作为下标使用，数组长度可以更新
    NewArry[NewArry.length] = arry[i];
  }
}
console.log(NewArry);

//反转数组
var array = [10, 20, 30, 40, 50];
//循环用来控制交换的次数
for (var i = 0; i < array.length / 2; i++) {
  //将第一个元素放入临时变量中 交换数组中变量的值
  var temp = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = temp;
}
console.log(array);

//输入班级人数，用数组录入各自成绩，求总分、均分、最高分、最低分
var count = parseInt(prompt("请输入班级人数："));
var array = [];
var sum = 0;
//循环录入班级成绩
for (var i = 0; i < count; i++) {
  //.length的用法
  array[array.length] = parseInt(prompt("请输入第" + (i + 1) + "个人成绩"));
}
//求班级成绩总和
for (var j = 0; j < count; j++) {
  sum += array[j];
  //最值略
}
console.log("总分为" + sum);
console.log("均分为" + sum / count);

//冒泡排序
var array = [0, 20, 50, 40, 10, 60, 25];
//控制比较轮数
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      var temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(array);
