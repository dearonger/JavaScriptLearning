/*
 *
 * 正则表达式:也叫规则表达式,按照一定的规则组成的一个表达式,这个表达式的作用主要是匹配字符串的,
 * 
 * 正则表达式的作用:匹配字符串的
 *
 * 在大多数编程语言中都可以使用
 *
 * 正则表达式的组成:是由元字符或者是限定符组成的一个式子
 * 在非严格模式下的正则表达式，匹配到一个即是匹配
 * 正则表达式之后加 g 表示全局模式匹配，可以找到全部匹配的字符串
 * 正则表达式之后加 i 表示忽略大小写
 *
 * 元字符:
 *
 * .  表示的是:除了\n以外的任意的一个字符   "fdsfs238"
 *
 * [] 表示的是:范围,  [0-9] 表示的是0到9之间的任意的一个数字,  "789" [0-9]
 * [1-7] 表示的是1到7之间的任意的一个数字
 * [a-z] 表示的是:所有的小写的字母中的任意的一个
 * [A-Z] 表示的是:所有的大写的字母中的任意的一个
 * [a-zA-Z] 表示的是:所有的字母的任意的一个
 * [0-9a-zA-Z] 表示的是: 所有的数字或者是字母中的一个
 * [] 另一个函数: 把正则表达式中元字符的意义干掉    [.] 就是一个 .
 * | 或者     [0-9]|[a-z] 表示的是要么是一个数字,要么是一个小写的字母
 * () 分组 提升优先级   [0-9]|([a-z])|[A-Z]
 * ([0-9])([1-5])([a-z]) 三组, 从最左边开始计算
 * (()(()))
 *
 *
 * 都是元字符,但是也可以叫限定符,下面的这些
 *    *   表示的是:前面的表达式出现了0次到多次
 *    [a-z][0-9]* 小写字母中的任意一个 后面是要么是没有数字的,要么是多个数字的
 *    "fdsfs3223323" 可匹配 [a-z][0-9]*，这个正则表达式表示字母之后，0-9出现了零到多次
 *
 *    +  表示的是:前面的表达式出现了 1 次到多次
 *    [a-z][9]+  小写字母一个后面最少一个9,或者多个9
 *    "fesfewww9fefds"
 *
 *    ?  表示的是:前面的表达式出现了0次到1次,最少是0次,最多1次 ,另一个含义:阻止贪婪模式
 *    [4][a-z]? "1231234ij"
 *  限定符:限定前面的表达式出现的次数
 *  {} 更加的明确前面的表达式出现的次数
 *  {0,} 表示的是前面的表达式出现了0次到多次,和 *一样的
 *  {1,} 表示的是前面的表达式出现了1次到多次,和 +一样的
 *  {0,1} 表示的是前面的表达式出现了0次到1次,和 ?一样的
 *  {5,10} 表示的是前面的表达式出现了5次到10次
 *  {4} 前面的表达式出现了4次
 *  {,10} 错误的========不能这么写
 *  ^ 表示的是以什么开始,或者是取非(取反) 
 *  ^[0-9] 以数字开头
 *  ^[a-z] 以小写字母开始
 *  [^0-9] 取反,非数字
 *  [^a-z] 非小写字母
 *  [^0-9a-zA-Z_]
 *  $ 表示的是以什么结束   [0-9][a-z]$  必须以小写字母结束
 *  ^[0-9][a-z]$ 相当于是严格模式 字符串必须以一个数字开头以一个字符结束   例  "4f"
 *   \d 数字中的任意一个,
 *   \D 非数字中的一个
 *   \s 空白符中的一个
 *   \S 非空白符
 *   \w 非特殊符号
 *   \W 特殊符号
 *   \b 单词的边界
 *
 * 
 *    . 除了\n以外的任意一个单个字符
 *    []  范围
 *    () 分组,提升优先级
 *    | 或者
 *    * 0-多次
 *    + 1-多次
 *    ? 0-1次
 *    {0,} 和*一样
 *    {1,} 和+
 *    {0,1} 和?
 *
 *    \d 数字中的一个
 *    \D 非数字
 *    \s 空白符
 *    \S 非空白符
 *     \W  特殊符号
 *     \w 非特殊符号 _
 *     ^ 取反,以什么开始
 *     $ 以什么结束
 *
 *     \b 单词边界
 *
 * 
 * 写正则表达式,根据字符串来写正则表达式进行匹配
 *
 * 经验: 1.找规律 2.不要追求完美
 *
 *
 * 身份证的正则表达式
 *
 * 15位或者18位
 * ([1-9][0-9]{14})|([1-9][0-9]{16}[0-9xX])
 *
 * ([1-9][0-9]{14})([0-9]{2}[0-9xX])?
 *
 *
 * 练习:
 * 1.座机号码的正则表达式
 * 010-19876754
 * 0431-87123490
 *
 * [0-9]{3,4}[-][0-9]{8}
 * \d{3,4}[-]\d{8}
 *
 *
 * 2.qq号码的正则表达式
 *
 * [1-9][0-9]{4,10}
 * \d{5,11}
 *
 * 3.手机号码的正则表达式
 *
 * 130 131 132 133 134 135 136 137 138 139
 * 143 147
 * 150 151 152 153 154 155 156 157 158 159
 * 170 171 173 176 177
 * 180 181 182 183 184 185 186 187 188 189
 * ([1][358][0-9][0-9]{8})|([1][4][37][0-9]{8})|([1][7][01367][0-9]{8})
 * \d{11}
 *
 *
 * 邮箱的正则表达式,必须要记住的
 * 例：sd2113_3.-fd@itcast.com.cn
 * [0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}
 *
 * 中文的正则表达式
 * [\u4e00-\u9fa5]  [一 - 龥]
 * 
 * escape("你好啊"); 输出===>  "%u4F60%u597D%u554A"
 * unescape("%u4F60%u597D%u554A") 输出===>"你好啊"
 *
 * */

//创建正则表达式对象
//1 构造函数的方式
let exp = new RegExp(/\d{5}/); //RE也可写成 "\\d{5}"
let flag = exp.test("my tel is 12345");
console.log(flag); //true

//2 字面量的方式
let exp = /\d{1,5}/;
let flag = exp.test("my tel is 123");
console.log(flag);

//RE练习：识别是否匹配
//只要能匹配到就是 true，并不是完全一样

console.log(/[a-zA-Z]+/.test("hello")); //true

console.log(/./.test("除了回车换行以外的任意字符")); //true

console.log(/.*/.test("0个到多个任意字符")); //true

console.log(/.+/.test("1个到多个任意字符")); //true

console.log(/.?/.test("哈哈")); //❗️true

console.log(/[0-9]/.test("9527")); //true

console.log(/[a-z]/.test("what")); //true

console.log(/[A-Z]/.test("Are")); //true

console.log(/[a-zA-Z]/.test("干啥子")); //false

console.log(/[0-9a-zA-Z]/.test("9ebg")); //true

console.log(/b|(ara)/.test("abra")); //true

console.log(/[a-z]{2,3}/.test("arfsf")); //true

console.log(/\d/.test("998")); //true

console.log(/\d*/.test("998")); //true

console.log(/\d+/.test("998")); //true

console.log(/\d{0,}/.test("998")); //true

console.log(/\d{2,3}/.test("998")); //true

console.log(/\D/.test("eat")); //true

console.log(/\s/.test("  ")); //true

console.log(/\S/.test("嘎嘎 ")); //true

console.log(/\w/.test("_")); //true

console.log(/\W/.test("_")); //false
