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
var arr5 = [1, 53, 6, 2, 64, 34, 48];
arr5.sort();
console.log(arr5); //[1, 2, 34, 48, 53, 6, 64]不稳定

// ❗️.sort(function)
arr5.sort(function(a, b) {
  return a - b;
});
console.log(arr5);
