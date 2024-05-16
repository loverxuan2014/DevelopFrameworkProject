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