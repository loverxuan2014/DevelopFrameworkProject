---
html:
  embed_local_images: false
  embed_svg: true
  offline: false
  toc: true

print_background: false
export_on_save:
  html: true
---
# Help_02 TypeScript基础语法
---
| Date | Author | Content |
| :-----: | :--: | :------- |
| 2024/5/16 | 圆圈 | 创建文档 |
## 1. tsc常用编译参数
--help 显示帮助信息
`tsc --help`
--module 载入扩展模块
`tsc --module`
--target 设置ECMA版本
`tsc --target`
--declaration 额外生成一个.d.ts扩展名的文件
`tsc ts-hw.ts --declaration #生成ts-hw.ts和ts-hw.d.ts两个文件 ` 
--removeComments 删除文件的注释
`tsc --removeComments`
--out 编译多个文件合并到一个输出的文件
`tsc --out`
--sourcemap 生成一个sourcemap(.map)文件，是一个存储源代码与编译代码对应位置映射的信息文件
`tsc --sourcemap`
--module nolmplicitAny 在表达式和声明上有隐含的any类型时会报错
`tsc --module nolmplicitAny`
--watch 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。
`tsc --watch`
## 2. TypeScript保留关键字
| 关键字   | 用途 | 关键字   | 用途 |
| :-----: | :--: | :-----: | :--: |
| break |    |  as  |    |
| catch |    |  switch  |    |
| case |    |  if  |    |
| throw |    |  else  |    |
| var |    |  number  |    |
| string |    |  get  |    |
| module |    |  type  |    |
| instanceof |    |  typeof  |    |
| public |    |  private  |    |
| enum |    |  export  |    |
| finally |    |  for  |    |
| while |    |  void  |    |
| null |    |  super  |    |
| this |    |  new  |    |
| in |    |  return  |    |
| true |    |  false  |    |
| any |    |  extends  |    |
| static |    |  let  |    |
| package |    |  implements  |    |
| interface |    |  function  |    |
| do |    |  try  |    |
| yield |    |  const  |    |
| continue |    |    |    |
## 3. 语言特性
- 【空白和换行】TypeScript 会忽略程序中出现的空格、制表符和换行符。
- 【大小写】TypeScript 区分大写和小写字符。
- 【整型】TypeScript 和 JavaScript 没有整数类型。
- 【分号】每行指令都是一段语句，分号在 TypeScript 中是可选的，建议使用。
    1. 以下代码都是合法的：
    ```typescript
    console.log("Runoob")
    console.log("Google");
    ```
    2. 如果语句写在同一行则一定需要使用分号来分隔，否则会报错，如：
    ```typescript
    console.log("Runoob");console.log("Google");
    ```
- 【注释】单行注释 ( // ) − 在 // 后面的文字都是注释内容。多行注释 (/* */) − 这种注释可以跨越多行。
    ```typescript
    // 这是一个单行注释
    /* 
    这是一个多行注释 
    这是一个多行注释 
    这是一个多行注释 
    */
    ```
- 【面向对象】TS是一种面向对象的编程语言。
    - 对象：对象是类的一个实例，有状态和行为。
    - 类：类是一个模板，它描述一类对象的行为和状态。
    - 方法/函数：方法是类的操作的实现步骤。
## 3. 数据类型
<table>
<tr>
<th>数据类型</th>
<th>关键字</th>
<th>示例</th>
</tr>

<tr>
<td>任意类型</td>
<td>any</td>
<td>
声明为 any 的变量可以赋予任意类型的值。
</td>
</tr>

<tr>
<td>数字类型</td>
<td>number</td>
<td>
双精度 64 位浮点值。它可以用来表示整数和分数。
<pre>
<code>
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制
</code>
</pre>
</td>
</tr>

<tr>
<td>字符串类型</td>
<td>string</td>
<td>
一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
<pre>
<code>
let name: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;
</code>
</pre>
</td>
</tr>

<tr>
<td>布尔类型</td>
<td>boolean</td>
<td>
表示逻辑值：true 和 false。
<pre>
<code>
let flag: boolean = true;
</code>
</pre>
</td>
</tr>

<tr>
<td>数组</td>
<td>无</td>
<td>	
声明变量为数组。
<pre>
<code>
// 在元素类型后面加上[]
let arr: number[] = [1, 2];
// 或者使用数组泛型
let arr: Array<number> = [1, 2];
</code>
</pre>
</td>
</tr>

<tr>
<td>元组</td>
<td>无</td>
<td>	
元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
<pre>
<code>
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob
</code>
</pre>
</td>
</tr>

<tr>
<td>枚举</td>
<td>enum</td>
<td>	
枚举类型用于定义数值集合。
<pre>
<code>
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2
</code>
</pre>
</td>
</tr>

<tr>
<td>void</td>
<td>void</td>
<td>	
用于标识方法返回值的类型，表示该方法没有返回值。
<pre>
<code>
function hello(): void {
    alert("Hello Runoob");
}
</code>
</pre>
</td>
</tr>

<tr>
<td>null</td>
<td>null</td>
<td>	
表示对象值缺失。
</td>
</tr>

<tr>
<td>undefined</td>
<td>undefined</td>
<td>	
用于初始化变量为一个未定义的值。
</td>
</tr>

<tr>
<td>never</td>
<td>never</td>
<td>	
never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
</td>
</tr>

</table>

## 4. 变量声明
TypeScript 变量的命名规则：
- 变量名称可以包含数字和字母。
- 除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
- 变量名不能以数字开头。

变量声明方式：
- var let const
```typescript
//常规声明
var [变量名] : [类型] = 值;
var username: string = "Runoob";
//无初始值声明：变量值会设置为 undefined
var username:string;
//无类型声明：类型为any
var username = "Runoob";
//无初始值及类型声明：类型为any，初始值为undefined
var username;
```
- var
    已不推荐使用。
    var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问，多次声明同一个变量并不会报错。
    ```typescript
    for (var i = 0; i < 10; i++) {
    setTimeout(
        function() {
            console.log(i); 
        }, 100 * i);
    }
    ```
    预期返回结果1-9，实际返回结果都是10。
    因为实际上我们传给setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i。
    使用let无此问题。

- let
    当用let声明一个变量，它使用的是词法作用域或块作用域。块级作用域有两个特点：
    1. 块作用域变量在包含它们的块或for循环之外是不能访问的
    2. 它们不能在被声明之前读或写。虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于暂时性死区。

- const
    const拥有与 let相同的作用域规则，但是为静态声明，声明后的值不可改变。

### 4.1 类型断言
类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
语法格式：`<类型>值`或`值 as 类型`
实例：
```typescript
var str = '1';
var str2: number = <number><any> str; 
console.log(str2);
```
当 A 类型是 B 类型的子集，或者 B 类型是 A 类型的子集时，A 能被成功断言成 B。这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 any，如`var str2: number = <any> str;`

### 4.2 类型推断
当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。
```
var num = 2;    // 类型推断为 number
console.log("num 变量的值为 "+num); 
num = "12";    // 编译错误
console.log(num);
```
第一行代码声明了变量 num 初始值为 2，程序使用类型推断来确定变量的数据类型，第一次赋值为 2，num 设置为 number 类型。第三行代码，当我们再次为变量设置字符串类型的值时，这时编译会错误。因为变量已经设置为了 number 类型。

### 4.3 变量作用域
- **全局作用域** − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
- **类作用域** − 这个变量也可以称为字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，**静态的变量可以通过类名直接访问。**
- **局部作用域** − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
```typescript
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
```
执行结果：
```
全局变量为: 12
10
实例变量: 13
```
