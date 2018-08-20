/**
 * 根据id属性的值，返回对应的对象
 * @param {string} id
 */
function my$(id) {
  return document.getElementById(id);
}

//兼容代码
function getInnerText(element) {
  if (typeof element.innerText == "undefined") {
    return element.textContent;
  } else return element.innerText;
}

function setInnerText(element, text) {
  if (typeof element.innerText == "undefined") {
    element.textContent = text;
  } else element.innerText = text;
}

//为任意元素.绑定任意的事件, 任意的元素,事件的类型,事件处理函数
function addEventListener(element, type, fn) {
  //判断浏览器是否支持这个方法
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, fn);
  } else {
    element["on" + type] = fn;
  }
}

//解绑事件的兼容
//为任意的一个元素,解绑对应的事件
function removeEventListener(element, type, fnName) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fnName, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, fnName);
  } else {
    element["on" + type] = null;
  }
}
