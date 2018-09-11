/** ❗️Set 本身是一个构造函数，用来生成 Set 数据结构。它类似于数组，但它不是数组。并且成员的值都是唯一的，没有重复的值。
 * Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。
 *
 * 四个操作方法
 * add(value)：添加某个值，返回 Set 结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * clear()：清除所有成员，没有返回值。
 * Array.from方法可以将 Set 结构转为数组。
 * let arr = Array.from(new Set([1,1,2,4,5,6,2,1,8])); ====> arr=[1,2,4,5,6,8] 已经去重
 *
 * 四个遍历方法 (Set的遍历顺序就是插入顺序，这个特性有时非常有用)
 * keys()：返回键名的遍历器
 * values()：返回键值的遍历器
 * entries()：返回键值对的遍历器
 * forEach()：使用回调函数遍历每个成员
 *
 * for...in循环读取键名，for...of循环读取键值。
 *
 */

//❗️Set 操作方法
let s = new Set();
s.add(1)
  .add(2)
  .add(2);
// 注意2被加入了两次

s.size; // 2

s.has(1); // true
s.has(2); // true
s.has(3); // false

s.delete(2);
s.has(2); // false

//❗️Set 的遍历方法
//由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

let set = new Set(["red", "green", "blue"]);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

for (let x of set) {
  //可以省略values方法，直接用for...of循环遍历 Set。
  console.log(x);
}
// red
// green
// blue

set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + " : " + value));
// 1 : 1
// 4 : 4
// 9 : 9
//上面代码说明，forEach方法的参数就是一个处理函数。该函数的参数与数组的forEach一致，依次为键值、键名、集合本身。
//这里需要注意，Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。

//❗️扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。

let set = new Set(["red", "green", "blue"]);
let arr = [...set]; // ❗️[...set] 就将一个 Set 对象变为了数组对象。
// ['red', 'green', 'blue']

//扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
// [3, 5, 2]

//❗️数组的map和filter方法也可以间接用于 Set。
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => x % 2 == 0));
// 返回Set结构：{2, 4}

//❗️使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]); // Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x))); // set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x))); // Set {1}

//❗️for of 循环
var arr = ["a", "b", "c", "d"];
//for in 循环
for (let a in arr) {
  console.log(a); // 0 1 2 3
}
//for of 循环
for (let a of arr) {
  console.log(a); // a b c d
}
