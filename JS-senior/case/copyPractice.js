let obj1 = {
  name: "Jerry",
  age: 10,
  sex: "man",
  car: ["Benz", "Porsche", "Volvo"],
  dog: {
    name: "bendy",
    age: 1,
    color: "yellow"
  }
};
function copy(a, b) {
  for (let key in a) {
    let item = a[key];
    if (a[key] instanceof Array) {
      b[key] = [];
      copy(item, b[key]);
    } else if (a[key] instanceof Object) {
      b[key] = {};
      copy(item, b[key]);
    } else {
      b[key] = item;
    }
  }
}
var obj2 = {};
copy(obj1, obj2);
console.dir(obj1);
console.dir(obj2);
