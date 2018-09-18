function sum(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
function countNum(arr) {
  let count = 0;
  let num = 0; //差值
  let arrFront = [];
  let arrEnd = [];

  for (let i = 0; i < 3; i++) {
    arrFront.push(arr[i]);
  }
  for (let i = 3; i < 6; i++) {
    arrEnd.push(arr[i]);
  }
  arrFront = arrFront.map(elem => parseInt(elem));
  arrEnd = arrEnd.map(elem => parseInt(elem));
  let sum1 = sum(arrFront);
  let sum2 = sum(arrEnd);
  while (sum1 !== sum2) {
    arrFront.sort();
    arrEnd.sort();
    num = Math.abs(sum1 - sum2);
    if (sum1 < sum2) {
      if (9 - arrFront[0] >= num) {
        arrFront[0] += num;
        count++;
      } else {
        arrFront[0] = 9;
        count++;
      }
    } else {
      if (9 - arrEnd[0] >= num) {
        arrEnd[0] += num;
        count++;
      } else {
        arrEnd[0] = 9;
        count++;
      }
    }
  }
  return count;
}
// console.log(countNum(["0", "2", "1", "0", "3", "1"]));
function getSum(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(main("000090"));
