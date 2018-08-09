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
  for (var i = 2; i < m; i++) {
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

//方法2
function isPrimeNumber(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      //说明不是质数
      return false;
    }
  }
  return true;
}
var number = parseInt(prompt("请输入数字："));
console.log(isPrimeNumber(number) ? number+"是质数" : number+"不是质数");
