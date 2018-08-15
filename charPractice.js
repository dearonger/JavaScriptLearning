//字符串的常用属性
/**
 * 注：有结束索引的参数中，返回值不包含结束索引代表的字符串
 *     ❗️JS中没有字符与字符串的区分，故 ’‘ 与 ”“ 没有分别
 * .length  返回字符串的长度
 * .charAt(index)  返回指定索引的字符，超出范围则返回空字符串
 * .fromCharCode(number1，number2,...numberN)  返回的是该ASCII对应的值
 * .concat(str1，str2，... strN)   返回的是多个字符串的拼接字符串
 * .indexOf(目标字符串[，搜索起始位置])  返回该字符串的索引值，没有则返回 -1
 * .replace(str1,newstr)  替换
 * .slice(beginSlice[,endSlice]) 提取字符串的一部分并返回新的字符串
 * .split(str[,number])  返回以 str 为分隔符切分的数组，切割后的数组元素个数
 * .substr(start[,number])  截取字符串，start为开始索引值，number是截取字符数
 * .substring(start[,end])  截取字符串，start为开始索引值，end为结束索引值
 * .toLocaleLowerCase(str)  将字符串全部转换成小写
 * .trim(str)  切掉str两端的空格，对字符串内部的空格无效
 */

//找到str中所有 substr 的位置  ❓❓❓
var str1 = "hello wod odd low who hobby";
//查找的开始位置
var index = 0;
var substr = "lo";
//循环查找整个字符串，若为 -1 说明找完了
while ((index = str1.indexOf(substr, index)) != -1) {
  console.log(index);
  index += substr.length;
}

//找到str中substr出现的次数  采用键值对的方式
var str = "wjbaleufhjkEksjdfhehrfkHJgjgKJhfjhVJHKF";
//第一步 统一字符格式，全变成小写，便于统计
str = str.toLocaleLowerCase();
//第二步 创建新的对象，属性名用于存储出现的字符，属性值用于记录出现的次数
var obj = {};
//第三步 遍历字符串，记录
for (var i = 0; i < str.length; i++) {
  //判断字符串中是否有该字符以及次数
  var key = str[i];
  if (obj[key]) {
    //若有计数加一
    obj[key]++;
  } else {
    obj[key] = 1; //若没有创建
  }
}
for (var key in obj) {
  console.log(key + "在字符串中出现了" + obj[key] + "次");
}
