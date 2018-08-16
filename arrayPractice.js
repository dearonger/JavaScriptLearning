/**
 * .concat(arr1,arr2,...arrn) 数组拼接，返回新数组
 * .isArray(obj)   返回布尔值，用于判断元素是否为数组
 * .every(function (element[,index,arry])) 返回布尔值，用于判断数组中元素是否满足某条件
 *   ❗注意filter与map的区别：filter是过滤器，而map遇到判断时返回的是布尔值  ️
 * .filter(function (element[,index,arry]))  返回新的数组，用于输出数组中满足某条件的元素组成的新数组
 * .map(function (element[,index,arry]))  返回一个新数组，其结果是对旧数组的每个元素执行一次提供的函数
 * .push(ele)  将一个或多个元素添加到数组的末尾，并返回新数组的长度
 * .pop(ele)  从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度
 * .shift(ele)  从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度
 * .unshift(ele)  将一个或多个元素添加到数组的开头，并返回新数组的长度
 * .forEach(function (element[,index,arry]))  对数组的每个元素执行一次提供的函数
 * .indexOf(目标元素值[，搜索起始位置])  返回该元素的索引值，没有则返回 -1
 * .lastIndexOf(目标元素值[，搜索起始位置])  返回最后一个该元素的索引值，没有则返回 -1
 * .join('连接符')  返回一个字符串,将一个数组（或一个类数组对象）的所有元素通过指定的连接符，连接成一个字符串并返回这个字符串
 * .sort(compareFunction)  对数组的元素进行排序，并返回数组。排序不一定是稳定的，要添加参照排序函数
 * .reverse() 将数组中元素的位置颠倒，并返回数组的引用（修改了数组的内容）
 * .slice(beginSlice[,endSlice]) 提取数组的一部分并返回新的数组
 * .splice(startIndex[,deleteCount[, item1[, item2[, ...]]]]) 方法通过删除现有元素和/或添加新元素来更改一个数组的内容
 *
 */
//.every()
var arr = ["gfefg", "sdfs", "sdd", "sdffde"];
var arr1 = arr.every(function(ele) {
  return ele.length > 3;
});
console.log(arr1); //false

//.filter()
var arr2 = arr.filter(function(ele) {
  return ele.length > 3;
});
console.log(arr2); //["sdffde", "sdfs", "gfefg"]
//❗️注意与map区分
var arr21 = arr.map(function(ele) {
  return ele.length > 3;
});
console.log(arr21); //[true, true, false, true]

//.forEach()
arr.forEach((ele, index) => console.log(ele + "===" + index));

//.map()
var arrx = [1, 4, 9, 16];
var arr3 = arrx.map(Math.sqrt);
console.log(arr3); //[1, 2, 3, 4]

//.reverse()
var arr4 = arr.reverse();
console.log(arr4);

//.sort()
var arr5 = [1, 53, 6, 2, 64, 34, 48];
arr5.sort();
console.log(arr5); //[1, 2, 34, 48, 53, 6, 64]不稳定

// ❗️.sort(function)
arr5.sort(function(a, b) {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else return -1;
});
console.log(arr5); //[1, 2, 6, 34, 48, 53, 64]

//.splice()
var months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at 1st index position
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, "May");
// replaces 1 element at 4th index
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April', 'May']

months.splice(4, 1);
// delete 1 element at 4th index
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April']

//去掉数组中的所有重复元素  ❌
var arr6 = [1, 2, 6, 4, 4, 6, 7, 8, 3, 5, 6, 3, 7, 9, 0, 10];
//用来存放新数组
var arr7 = [];
//遍历arr6，元素出现过,跳过;否则,加入arr7中
arr6.forEach(function(ele, index) {
  if (arr6[index]) {
    index++;
  } else {
    arr7[arr7.length] = ele;
  }
});
console.log(arr7);

//将一个数组的元素逆置
//方法一
var tempt = 0;
for (var i = 0; i < arr6.length / 2; i++) {
  tempt = arr6[i];
  arr6[i] = arr6[arr6.length - 1 - i];
  arr6[arr6.length - 1 - i] = tempt;
}
console.log(arr6);
//方法二
arr6.reverse();
console.log(arr6);

//模拟数组的sort方法排序
var arr8 = [1, 2, 6, 4, 4, 6, 7, 8, 3, 5, 6, 3, 7, 9, 0, 10];
//自定义构造函数
function MyArray() {
  //实例方法：通过实例对象调用的方法
  this.mySort = function(arr) {
    var tempt = arr[0];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          tempt = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tempt;
        } //end if
      } //end for
    } //end for
  };
}
var Arr = new MyArray();
Arr.mySort(arr8);
console.log(arr8);

//清空数组
arr8.length = 0;
