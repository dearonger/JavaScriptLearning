function File(name, size, time) {
  this.name = name;
  this.size = size;
  this.time = time;
}
let m1 = new File("apple.avi", "800M", "2000-01-20");
let m2 = new File("tom&jerry.avi", "200M", "1990-12-04");
let m3 = new File("ceo.avi", "400M", "2018-08-20");
let movie = [m1, m2, m3];
function mn(attr) {
  //函数作为返回值
  return function getSort(obj1, obj2) {
    if (obj1[attr] > obj2[attr]) {
      return 1;
    } else if (obj1[attr] == obj2[attr]) {
      return 0;
    } else return -1;
  };
}

movie.sort(mn("name"));
for (let i = 0; i < movie.length; i++) {
  console.log(
    movie[i].name + "=======" + movie[i].size + "=======" + movie[i].time
  );
}
