//递归
function getSum(n) {
  if (n == 1) {
    return 1;
  } else return n + getSum(n - 1);
}

console.log(getSum(100));

//求数字各个位数上的数字和
function getEverySum(n) {
  if (n < 10) {
    return n;
  } else return (n % 10) + getEverySum(parseInt(n / 10));
}

console.log(getEverySum(523));

//斐波那契数列
function getFib(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return getFib(n - 1) + getFib(n - 2);
}
console.log(getFib(7));
