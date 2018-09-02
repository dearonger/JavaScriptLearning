# jQuery 基本概念

> 学习目标：学会如何使用 jQuery，掌握 jQuery 的常用 api，能够使用 jQuery 实现常见的效果。

## 为什么要学习 jQuery？

【01-让 div 显示与设置内容.html】

使用 javascript 开发过程中，有许多的缺点：

```javascript
1. 查找元素的方法太少，麻烦。
2. 遍历伪数组很麻烦，通常要嵌套一大堆的for循环。
3. 有兼容性问题。
4. 想要实现简单的动画效果，也很麻烦
5. 代码冗余。
```

## jQuery 初体验

【02-让 div 显示与设置内容.html】

```javascript
$(document).ready(function() {
  $("#btn1").click(function() {
    //隐式迭代：偷偷的遍历，在jQuery中，不需要手动写for循环了，会自动进行遍历。
    $("div").show(200);
  });

  $("#btn2").click(function() {
    $("div").text("我是内容");
  });
});
```

优点总结：

```javascript
1. 查找元素的方法多种多样，非常灵活
2. 拥有隐式迭代特性，因此不再需要手写for循环了。
3. 完全没有兼容性问题。
4. 实现动画非常简单，而且功能更加的强大。
5. 代码简单、粗暴。
```

> 没有对比，就没有伤害，有了对比，处处戳中要害。

## 什么是 jQuery?

> jQuery 的官网 [http://jquery.com/](http://jquery.com/)
> jQuery 就是一个 js 库，使用 jQuery 的话，会比使用 JavaScript 更简单。

js 库：把一些常用到的方法写到一个单独的 js 文件，使用的时候直接去引用这 js 文件就可以了。（animate.js、common.js）

我们知道了，jQuery 其实就是一个 js 文件，里面封装了一大堆的方法方便我们的开发，其实就是一个加强版的 common.js，因此我们学习 jQuery，其实就是学习 jQuery 这个 js 文件中封装的一大堆方法。

## jQuery 的版本

> 官网下载地址：[http://jquery.com/download/](http://jquery.com/download/)
> jQuery 版本有很多，分为 1.x 2.x 3.x

大版本分类：

```javascript
1.x版本：能够兼容IE678浏览器
2.x版本：不兼容IE678浏览器
1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。

3.x版本：不兼容IE678，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）
```

关于压缩版和未压缩版

```javascript
jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有颗阅读性。
jquery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。
```

## jQuery 的入口函数

使用 jQuery 的三个步骤：

```javascript
1. 引入jQuery文件
2. 入口函数
3. 功能实现
```

关于 jQuery 的入口函数：

```javascript
//第一种写法
$(document).ready(function() {});
//第二种写法
$(function() {});
```

jQuery 入口函数与 js 入口函数的对比

```javascript
1.	JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
2.	jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。
```

## jQuery 对象与 DOM 对象的区别（重点）

```javascript
1. DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。
2. jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。
3. jQuery对象其实就是DOM对象的包装集（包装了DOM对象的集合（伪数组））
4. DOM对象与jQuery对象的方法不能混用。
```

DOM 对象转换成 jQuery 对象：【联想记忆：花钱】

```javascript
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象
```

jQuery 对象转换成 DOM 对象：

```javascript
var $li = $(“li”);
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)
```

【练习：隔行变色案例.html】

# 选择器

## 什么是 jQuery 选择器

jQuery 选择器是 jQuery 为我们提供的一组方法，让我们更加方便的获取到页面中的元素。注意：jQuery 选择器返回的是 jQuery 对象。

jQuery 选择器有很多，基本兼容了 CSS1 到 CSS3 所有的选择器，并且 jQuery 还添加了很多更加复杂的选择器。【查看 jQuery 文档】

jQuery 选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。所以我们平时真正能用到的只是少数的最常用的选择器。

## 基本选择器

| 名称       | 用法               | 描述                                 |
| ---------- | ------------------ | :----------------------------------- |
| ID 选择器  | $(“#id”);          | 获取指定 ID 的元素                   |
| 类选择器   | $(“.class”);       | 获取同一类 class 的元素              |
| 标签选择器 | $(“div”);          | 获取同一类标签的所有元素             |
| 并集选择器 | $(“div,p,li”);     | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器 | $(“div.redClass”); | 获取 class 为 redClass 的 div 元素   |

> 总结：跟 css 的选择器用法一模一样。

## 层级选择器

| 名称       | 用法        | 描述                                                           |
| ---------- | ----------- | :------------------------------------------------------------- |
| 子代选择器 | $(“ul>li”); | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素    |
| 后代选择器 | $(“ul li”); | 使用空格，代表后代选择器，获取 ul 下的所有 li 元素，包括孙子等 |

> 跟 CSS 的选择器一模一样。

## 过滤选择器

> 这类选择器都带冒号:

| 名称         | 用法                               | 描述                                                                |
| ------------ | ---------------------------------- | :------------------------------------------------------------------ |
| :eq（index） | $(“li:eq(2)”).css(“color”, ”red”); | 获取到的 li 元素中，选择索引号为 2 的元素，索引号 index 从 0 开始。 |
| :odd         | $(“li:odd”).css(“color”, ”red”);   | 获取到的 li 元素中，选择索引号为奇数的元素                          |
| :even        | $(“li:even”).css(“color”, ”red”);  | 获取到的 li 元素中，选择索引号为偶数的元素                          |

【案例：隔行变色】

## 筛选选择器(方法)

> 筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

| 名称               | 用法                        | 描述                                |
| ------------------ | --------------------------- | :---------------------------------- |
| children(selector) | $(“ul”).children(“li”)      | 相当于$(“ul>li”)，子类选择器        |
| find(selector)     | $(“ul”).find(“li”);         | 相当于$(“ul li”),后代选择器         |
| siblings(selector) | $(“#first”).siblings(“li”); | 查找兄弟节点，不包括自己本身。      |
| parent()           | $(“#first”).parent();       | 查找父亲                            |
| eq(index)          | $(“li”).eq(2);              | 相当于$(“li:eq(2)”),index 从 0 开始 |
| next()             | $(“li”).next()              | 找下一个兄弟                        |
| prev()             | $(“li”).prev()              | 找上一次兄弟                        |

```javascript
【案例：下拉菜单】this+children+mouseenter+mouseleave
【案例：突出展示】siblings+find
【案例：手风琴】next+parent
【案例：淘宝精品】index+eq
```
