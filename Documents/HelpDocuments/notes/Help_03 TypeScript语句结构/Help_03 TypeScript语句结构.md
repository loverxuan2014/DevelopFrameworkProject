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
# Help_03 TypeScript语句结构
---
| Date | Author | Content |
| :-----: | :--: | :------- |
| 2024/5/16 | 圆圈 | 创建文档 |
## 1. 运算符
### 1.1 算数运算符
假定 y=5，下面的表格解释了这些算术运算符的操作：
| 运算符 | 描述 | 例子 | X运算结果 | Y运算结果 |
| :---: | :---: | :---: | :---: | :---: |
| + | 加法 | x = y + 2 | 7 | 5 |
| - | 减法 | x = y - 2 | 3 | 5 |
| * | 乘法 | x = y * 2 | 10 | 5 |
| / | 除法 | x = y / 2 | 2.5 | 5 |
| % | 取余 | x = y % 2 | 1 | 5 |
| ++ | 自增 | x = ++y | 6 | 6 |
|  |  | x = y++ | 5 | 6 |
| -- | 自减 | x = --y | 4 | 4 |
|  |  | x = y-- | 5 | 4 |

### 1.2 关系运算符
关系运算符用于计算结果是否为 true 或者 false。
x=5，下面的表格解释了关系运算符的操作：
| 运算符 | 描述 | 比较 | 返回值 |
| :---: | :---: | :---: | :---: |
| == | 等于（不判断类型） | x == 8 | false |
| === | 等于（判断类型） | x == 8 | false |
| != | 不等于 | x != 8 | true |
| > | 大于 | x > 8 | false |
| < | 小于 | x < 8 | true |
| >= | 大于或等于 | x >= 8 | false |
| <= | 小于或等于 | x <= 8 | true |

### 1.3 逻辑运算符
逻辑运算符用于测定变量或值之间的逻辑。
给定 x=6 以及 y=0，下表解释了逻辑运算符：
<table>

<tr>
<th>运算符</th>
<th>描述</th>
<th>例子</th>
</tr>

<tr>
<td>&&</td>
<td>与（所有条件成立）</td>
<td>(x < 10 && y > 1) 为 false</td>
</tr>

<tr>
<td>||</td>
<td>或（任一条件成立）</td>
<td>(x < 10 || y > 1) 为 true</td>
</tr>

<tr>
<td>!</td>
<td>非</td>
<td>!(x==y) 为 true</td>
</tr>

</table>

### 1.4 位运算符
位操作是程序设计中对位模式按位或二进制数的一元和二元操作。主要用于二进制计算。
<table>
<tr>
<th>运算符</th>
<th>描述</th>
<th>例子</th>
<th>二进制</th>
<th>结果</th>
<th>十进制</th>
</tr>

<tr>
<td>&</td>
<td>按位与处理两个长度相同的二进制数，两个相应的二进位都为1，该位的结果值才为1，否则为0。</td>
<td>5 & 1</td>
<td>0101 & 0001</td>
<td>0001</td>
<td>1</td>
</tr>

<tr>
<td>|</td>
<td>按位或处理两个长度相同的二进制数，两个相应的二进位中只要有一个为1，该位的结果值为1。</td>
<td>5 | 1</td>
<td>0101 & 0001</td>
<td>0101</td>
<td>5</td>
</tr>

<tr>
<td>~</td>
<td>取反是一元运算符，对一个二进制数的每一位执行逻辑反操作。包括符号取反。</td>
<td>~5</td>
<td>~0101</td>
<td>1010</td>
<td>-6</td>
</tr>

<tr>
<td>^</td>
<td>按位异或运算，对等长二进制模式按位或二进制数的每一位执行逻辑异按位或操作。操作的结果是如果某位不同则该位为 1，否则该位为 0。</td>
<td>5 ^ 1</td>
<td>0101 ^ 0001</td>
<td>0100</td>
<td>4</td>
</tr>

<tr>
<td><</td>
<td>把 << 左边的运算数的各二进位全部左移若干位，由 << 右边的数指定移动的位数，高位丢弃，低位补 0。</td>
<td>5 << 1</td>
<td>0101 << 1</td>
<td>1010</td>
<td>10</td>
</tr>

<tr>
<td>>></td>
<td>把 >> 左边的运算数的各二进位全部右移若干位，>> 右边的数指定移动的位数，低位丢弃，高位补 0。</td>
<td>5 >> 1</td>
<td>0101 >> 1</td>
<td>0010</td>
<td>2</td>
</tr>

<tr>
<td>>>></td>
<td>无符号右移，与有符号右移位类似，除了左边一律使用0 补位。</td>
<td>5 >>> 1</td>
<td>0101 >>> 1</td>
<td>0010</td>
<td>2</td>
</tr>
</table>

### 1.5 赋值运算符
给定 x=10 和 y=5，下面的表格解释了赋值运算符：
| 运算符 | 描述 | 例子 | x返回值 |
| :---: | :---: | :---: | :---: |
| = | 赋值 | x = y | 5 |
| += | 先加后赋值 | x += y | 15 |
| -= | 先减后赋值 | x -= y | 5 |
| *= | 先乘后赋值 | x *= y | 50 |
| /= | 先除后赋值 | x /= y | 2 |
| %= | 先取余后赋值 | x %= y | 0 |

### 1.6 三元运算符
三元运算有 3 个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。
`Test ? expr1 : expr2`
- Test − 条件语句
- expr1 − 如果条件语句 Test 返回 true 则返回该值
- expr2 − 如果条件语句 Test 返回 false 则返回该值
实例：
```typescript
var num:number = -2 
var result = num > 0 ? "大于 0" : "小于 0，或等于 0" 
console.log(result)
```

### 1.7 类型运算符
typeof 是一元运算符，返回操作数的数据类型。
实例：
```typescript
var num = 12 
console.log(typeof num);   //输出结果: number
```

### 1.8 其他运算符
负号运算符(-)
```typescript
var x:number = 4 
var y = -x; 
console.log("x 值为: ",x);   // 输出结果 4 
console.log("y 值为: ",y);   // 输出结果 -4
```
字符串运算符: 连接运算符 (+)
+运算符可以拼接两个字符串
```typescript
var msg:string = "RUNOOB"+".COM" ;
console.log(msg);   // 输出结果 RUNOOB.COM
```

## 2. 条件语句
### 2.1 if...else if...else...
- 一个 if 判断语句可以有 0 或 1 个 else 语句，她必需在 else..if 语句后面。
- 一个 if 判断语句可以有 0 或多个 else..if，这些语句必需在 else 之前。
- 一旦执行了 else..if 内的代码，后面的 else..if 或 else 将不再执行。
语法
```typescript
if(boolean_expression 1) {
    # 在布尔表达式 boolean_expression 1 为 true 执行
} else if( boolean_expression 2) {
    # 在布尔表达式 boolean_expression 2 为 true 执行
} else if( boolean_expression 3) {
    # 在布尔表达式 boolean_expression 3 为 true 执行
} else {
    # 布尔表达式的条件都为 false 时执行
}
```
实例
```typescript
var num:number = 2 
if(num > 0) { 
    console.log(num+" 是正数") 
} else if(num < 0) { 
    console.log(num+" 是负数") 
} else { 
    console.log(num+" 不是正数也不是负数") 
}   //输出结果为：2 是正数
```
### 2.2 switch...case...
一个 switch 语句允许测试一个变量等于多个值时的情况。每个值称为一个 case，且被测试的变量会对每个 switch case 进行检查。

语法
```typescript
switch(expression){
    case constant-expression  :
       statement(s);
       break; /* 可选的 */
    case constant-expression  :
       statement(s);
       break; /* 可选的 */
  
    /* 您可以有任意数量的 case 语句 */
    default : /* 可选的 */
       statement(s);
}
```
- switch 语句中的 expression 是一个要被比较的表达式，可以是任何类型，包括基本数据类型（如 number、string、boolean）、对象类型（如 object、Array、Map）以及自定义类型（如 class、interface、enum）等。
- 在一个 switch 中可以有任意数量的 case 语句。每个 case 后跟一个要比较的值和一个冒号。
- case 的 constant-expression 必须与 switch 中的变量 expression 具有相同或兼容的数据类型。
- 当被测试的变量等于 case 中的常量时，case 后跟的语句将被执行，直到遇到 break 语句为止。
- 当遇到 break 语句时，switch 终止，控制流将跳转到 switch 语句后的下一行。
- 不是每一个 case 都需要包含 break。如果 case 语句不包含 break，控制流将会继续后续的 case，直到遇到 break 为止。
- 一个 switch 语句可以有一个可选的 default case，出现在 switch 的结尾。default 关键字则表示当表达式的值与所有 case 值都不匹配时执行的代码块。default case 中的 break 语句不是必需的。

实例
```typescript
var grade:string = "A"; 
switch(grade) { 
    case "A": { 
        console.log("优"); 
        break; 
    } 
    case "B": { 
        console.log("良"); 
        break; 
    } 
    case "C": {
        console.log("及格"); 
        break;    
    } 
    case "D": { 
        console.log("不及格"); 
        break; 
    }  
    default: { 
        console.log("非法输入"); 
        break;              
    } 
}     //输出结果：优
```

## 3. 循环语句
### 3.1 for循环
语法
```typescript
for ( init; condition; increment ){
    statement(s);
}
```
- init 会首先被执行，且只会执行一次。这一步允许您声明并初始化任何循环控制变量。您也可以不在这里写任何语句，只要有一个分号出现即可。
- 接下来，会判断 condition。如果为 true，则执行循环主体。如果为 false，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。
- 在执行完 for 循环主体后，控制流会跳回上面的 increment 语句。该语句允许您更新循环控制变量。该语句可以留空，只要在条件后有一个分号出现即可。
- 条件再次被判断。如果为 true，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为 false 时，for 循环终止。

实例：以下实例计算 5 的阶乘， for 循环生成从 5 到 1 的数字，并计算每次循环数字的乘积。
```typescript
var num:number = 5; 
var i:number; 
var factorial = 1; 
 
for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)
```
### 3.2 for...in循环
for...in 语句用于一组值的集合或列表进行迭代输出。
语法
```typescript
for (var val in list) { 
    //语句 
}
```
val 需要为 string 或 any 类型。
实例
```typescript
var j:any; 
var n:any = "a b c" ;
 
for(j in n) {
    console.log(n[j]);  
}
```
### 3.3 for...of循环
for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。
实例
```typescript
let someArray = [1, "string", false];
 
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
```
### 3.4 forEach、every、some、map循环
forEach、every 和 some 是 JavaScript 的循环语法，TypeScript 作为 JavaScript 的语法超集，当然默认也是支持的。
因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。
实例
```typescript
//forEach循环，不会被return跳出循环体
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});
```
```typescript
//every循环，return false跳出循环体
let list: number[] = [4, 5, 6];
list.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // 内部返回false跳出循环体
});
```
```typescript
//some循环，return true跳出循环体
let list: number[] = [4, 5, 6];
list.some((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return false; // Continues
    // 内部返回true跳出循环体
});
```
```typescript
//map循环，有返回值，返回一个新的数组
let list: number[] = [4, 5, 6];
let arr: number[] = [];
arr = list.map((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return val * 2; 
});
console.log(arr);   //[8,10,12]
```

### 3.5 while循环
while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。
语法
```typescript
while(condition)
{
   statement(s);
}
```
- statement(s) 可以是一个单独的语句，也可以是几个语句组成的代码块。
- condition 可以是任意的表达式，当条件为 true 时执行循环。 当条件为 false 时，程序流将退出循环。

实例
```typescript
var num:number = 5; 
var factorial:number = 1; 
 
while(num >=1) { 
    factorial = factorial * num; 
    num--; 
} 
console.log("5 的阶乘为："+factorial);
```

### 3.6 do...while循环
do...while 循环是在循环的尾部检查它的条件。
语法
```typescript
do
{
   statement(s);
}while( condition );
```
- 条件表达式出现在循环的尾部，所以循环中的 statement(s) 会在条件被测试之前至少执行一次。
- 如果条件为 true，控制流会跳转回上面的 do，然后重新执行循环中的 statement(s)。这个过程会不断重复，直到给定条件变为 false 为止。

实例
```typescript
var n:number = 10;
do { 
    console.log(n); 
    n--; 
} while(n>=0);
```
### 3.7 break
- 当 break 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句。
- 它可用于终止 switch 语句中的一个 case。
实例
```typescript
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("在 1~10 之间第一个被 5 整除的数为 : " + i);
        break; // 找到一个后退出循环
    }
    i++;
} // 输出 5 然后程序执行结束
```
### 3.8 continue
continue 语句有点像 break 语句。但它不是强制终止，continue 会跳过当前循环中的代码，强迫开始下一次循环。

对于 for 循环，continue 语句执行后自增语句仍然会执行。对于 while 和 do...while 循环，continue 语句会重新执行条件判断语句。
```typescript
var num:number = 0;
var count:number = 0;
 
for(num=1;num<=20;num++) {
    if (num % 2==0) {
        continue
    }
    count++
}
console.log ("0 ~20 之间的偶数个数为: "+count)    //输出10个
```
### 3.9 无限循环
无限循环就是一直在运行不会停止的循环。 for 和 while 循环都可以创建无限循环。
```typescript
for(;;) { 
   // 语句
}
```
```typescript
while(true) { 
   // 语句
} 
```

### 4. 函数/方法
函数是一组一起执行一个任务的语句。函数声明告诉编译器函数的名称、返回类型和参数。函数定义提供了函数的实际主体。
【声明函数】
- 标准声明
```typescript
function function_name()
{
    // 执行代码
}
```
- 匿名函数
```typescript
//有箭头声明
var res = () => {}
var res = () => functionbody
//无箭头声明
var res = function(){}
```
实例
```typescript
// ES5: 没有箭头函数  
var getResult = function(username, points): string {  
  return username + ' scored ' + points + ' points!';  
};  
  
// ES6: 箭头函数  
var getResult = (username: string, points: number): string => {  
  return `${ username } scored ${ points } points!`;  
}  

var foo = (x:number)=>10 + x;
```
【调用函数】
```typescript
// 调用函数
test();
// 匿名函数自调用：在匿名函数后使用 () 即可
(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()
```

【函数返回值】
```typescript
function function_name():return_type { 
    // 语句
    return value; 
}
```
- 在使用 return 语句时，函数会停止执行，并返回指定的值。
- return_type 是返回值的类型。
- return 关键词后跟着要返回的结果。
- 一般情况下，一个函数只有一个 return 语句。
- 返回值的类型需要与函数定义的返回类型(return_type)一致。

【函数参数】
```typescrpit
function func_name( param1 [:datatype], param2 [:datatype]) {   
}
```
- 每个参数使用逗号 , 分隔
- param1、param2 为参数名。
- datatype 为参数类型。
- 可以使用?设置可选参数，见下实例
```typescript
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
 
let result1 = buildName("Bob");  // 正确
let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");  // 正确
```
- 可以使用默认参数，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数，语法格式为：
```typescript
function function_name(param1[:type],param2[:type] = default_value) { 
}
```
- 参数不能同时设置可选和默认
- 有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
- 剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
```typescript
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
```
实例
```typescript
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3);     //输出：6
 addNumbers(10,10,10,10,10);        //输出：50
```

【构造函数】
TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
```typescript
var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```
- arg1, arg2, ... argN：参数列表
- functionBody：一个含有包括函数定义的 JavaScript 语句的字符串
实例
```typescript
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);     //输出：12
```

【递归函数】
递归函数即在函数内调用函数本身。
实例
```typescript
function factorial(number: number): number {
    if (number <= 0) {         // 停止执行
        return 1; 
    } else {     
        return (number * factorial(number - 1));     // 调用自身
    } 
}; 
console.log(factorial(6));      // 输出 720
```

【函数重载】
- 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
- 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
参数类型不同：
```typescript
function disp(string):void; 
function disp(number):void;
```
参数数量不同：
```typescript
function disp(n1:number):void; 
function disp(x:number,y:number):void;
```
参数类型顺序不同：
```typescript
function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;
```
- 如果参数类型不同，则参数类型应设置为 any。
- 参数数量不同你可以将不同的参数设置为可选。
实例：
```typescript
//定义重载签名
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
 
//定义实现签名
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc");
disp(1,"xyz");
```
- 定义函数重载需要定义重载签名和一个实现签名。
- 重载签名定义函数的形参和返回类型，没有函数体。一个函数可以有多个重载签名(不可调用)
### 5. 联合类型
- 联合类型可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
```typescript
var val:string|number 
val = 12 
console.log("数字为 "+ val) 
val = "Runoob" 
console.log("字符串为 " + val)
```
- 联合类型作为函数参数
```typescript
function disp(name:string|string[]) { 
        if(typeof name == "string") { 
                console.log(name) 
        } else { 
                var i; 
                for(i = 0;i<name.length;i++) { 
                console.log(name[i])
                } 
        } 
} 
disp("Runoob") 
console.log("输出数组....") 
disp(["Runoob","Google","Taobao","Facebook"])
```
- 联合类型数组
```typescript
var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**数字数组**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  
 
arr = ["Runoob","Google","Taobao"] 
console.log("**字符串数组**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}
```
### 6. 接口
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
语法
```typescript
interface interface_name { 
}
```
以下实例中，我们定义了一个接口 IPerson，接着定义了一个变量 customer，它的类型是 IPerson。
customer 实现了接口 IPerson 的属性和方法。
```typescript
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
 
console.log("Customer 对象 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  
 
var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
} 
 
console.log("Employee  对象 ") 
console.log(employee.firstName) 
console.log(employee.lastName)
```
联合类型和接口实例
```typescript
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
 
// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
 
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
console.log((options.commandline as string[])[0]); 
console.log((options.commandline as string[])[1]);
 
// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
console.log(fn());
```
接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
```typescript
interface namelist { 
   [index:number]:string 
} 
 
// 类型一致，正确
var list2:namelist = ["Google","Runoob","Taobao"]
// 错误元素 1 不是 string 类型
var list2:namelist = ["Runoob",1,"Taobao"]
```
接口继承就是说接口可以通过其他接口来扩展自己。
Typescript 允许接口继承多个接口。
继承使用关键字 extends。

单接口继承语法：
`Child_interface_name extends super_interface_name`
多接口继承语法: 继承的各个接口使用逗号 , 分隔
`Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name`
实例
```typescript
interface IParent1 { 
    v1:number 
} 
 
interface IParent2 { 
    v2:number 
} 
 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
```
### 7. 类
类描述了所创建的对象共同的属性和方法。
语法
```typescript
class class_name { 
    // 类作用域
}
```
定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：
- 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
- 构造函数 − 类实例化时调用，可以为类的对象分配内存。
- 方法 − 方法为对象要执行的操作。
- 创建类的实例化对象
`var object_name = new class_name([ arguments ])`
- 类实例化时会调用构造函数，例如：
`var obj = new Car("Engine 1")`
- 类中的字段属性和方法可以使用 . 号来访问：
`obj.field_name`
`obj.function_name()`
实例
```typescript
class Car { 
   // 字段
   engine:string; 
   
   // 构造函数
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
   // 方法
   disp():void { 
      console.log("函数中显示发动机型号  :   "+this.engine) 
   } 
} 
 
// 创建一个对象
var obj = new Car("XXSY1")
 
// 访问字段
console.log("读取发动机型号 :  "+obj.engine)  
 
// 访问方法
obj.disp()
```
【类的继承】

TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。

类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。

语法
```typescript
class child_class_name extends parent_class_name
```
【继承类的方法重写】

类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。

其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。
```typescript
class PrinterClass { 
   doPrint():void {
      console.log("父类的 doPrint() 方法。") 
   } 
} 
 
class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() // 调用父类的函数
      console.log("子类的 doPrint()方法。")
   } 
}
```
【static】
static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
```typescript
class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("num 值为 "+ StaticMem.num) 
   } 
} 
 
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法
```
【instanceof 运算符】
instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
```typescript
class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
```
【访问控制修饰符】
TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。
- public（默认） : 公有，可以在任何地方被访问。
- protected : 受保护，可以被其自身以及其子类访问。
- private : 私有，只能被其定义所在的类访问。

实例
```typescript
class Encapsulate { 
   str1:string = "hello" 
   private str2:string = "world" 
}
 
var obj = new Encapsulate() 
console.log(obj.str1)     // 可访问 
console.log(obj.str2)   // 编译错误， str2 是私有的
```
【类和接口】
类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
以下实例中 AgriLoan 类实现了 ILoan 接口：
```typescript
interface ILoan { 
   interest:number 
} 
 
class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 
 
var obj = new AgriLoan(10,1) 
console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )
```
### 8. 对象
对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等，如下实例：
```typescript
var object_name = { 
    key1: "value1", // 标量
    key2: "value",  
    key3: function() {
        // 函数
    }, 
    key4:["content1", "content2"] //集合
}
//访问对象的值
console.log(object_name.key1);
```
【类型模板】
在对象中添加方法
```typescript
var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();
```
对象也可以作为一个参数传递给函数
```typescript
var sites = { 
    site1:"Runoob", 
    site2:"Google",
}; 
var invokesites = function(obj: { site1:string, site2 :string }) { 
    console.log("site1 :"+obj.site1) 
    console.log("site2 :"+obj.site2) 
} 
invokesites(sites)
```
### 9. 命名空间
命名空间定义了标识符的可见范围，一个标识符可在多个命名空间中定义，它在不同命名空间中的含义是互不相干的。
TypeScript 中命名空间使用 namespace 来定义，语法格式如下：
```typescript
namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
}
```
如果我们需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字。
要在另外一个命名空间调用语法格式为：
`SomeNameSpaceName.SomeClassName;`
如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
`/// <reference path = "SomeFileName.ts" />`
嵌套命名空间
```typescript
namespace namespace_name1 { 
    export namespace namespace_name2 {
        export class class_name {    } 
    } 
}
```
成员的访问使用点号 . 来实现
Invoice.ts 文件
```typescript
namespace Runoob { 
   export namespace invoiceApp { 
      export class Invoice { 
         public calculateDiscount(price: number) { 
            return price * .40; 
         } 
      } 
   } 
}
```
InvoiceTest.ts 文件
```typescript
/// <reference path = "Invoice.ts" />
var invoice = new Runoob.invoiceApp.Invoice(); 
console.log(invoice.calculateDiscount(500));
```
### 10. 模块
TypeScript 模块的设计理念是可以更换的组织代码。
在模块里面的变量、函数和类等在模块外部是不可见的，除非明确地使用 export 导出它们。类似地，我们必须通过 import 导入其他模块导出的变量、函数、类等。
两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的。
```typescript
// 文件名 : SomeInterface.ts 
export interface SomeInterface { 
   // 代码部分
}
```
```typescript
import someInterfaceRef = require("./SomeInterface");
```