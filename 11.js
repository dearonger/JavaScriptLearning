let r1 = read_line();
let arr = [];
arr = r1.split(" ").map(elem => parseInt(elem));
let N = arr[0];
let M = arr[1];
let P = arr[2];
let r2 = read_line();
let arr2 = r2.split(" ").map(elem => parseInt(elem));
let tmp,
  count = 1;
for (let i = 0; i < M; i++) {
  tmp = read_line().split(" ");
  if (tmp[0] === "arr2") {
    arr2[parseInt(tmp[1]) - 1]++;
  } else if (tmp[0] === "B") {
    arr2[parseInt(tmp[1]) - 1]--;
  }
}
let n = arr2[P - 1];
arr2 = arr2.filter(elem => elem !== n);
arr2.sort(function(a, b) {
  return b - a;
});
arr2.forEach(function(elem) {
  if (n < elem) {
    count++;
  }
});
print(count);
