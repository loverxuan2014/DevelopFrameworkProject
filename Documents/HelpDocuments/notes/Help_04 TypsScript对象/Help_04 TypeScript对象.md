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
# Help_04 TypeScript对象
---
| Date | Author | Content |
| :-----: | :--: | :------- |
| 2024/5/17 | 圆圈 | 创建文档 |
## 1. Number对象
Number 对象是原始数值的包装对象。
语法
`var num = new Number(value);`

【Number 对象属性】
- MAX_VALUE：可表示的最大的数，MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。
- MIN_VALUE：可表示的最小的数，即最接近 0 的正数 (实际上不会变成 0)。MIN_VALUE 的值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。
- NaN：非数字值（Not-A-Number）。
```typescript
var month = 0 
if( month<=0 || month >12) { 
    month = Number.NaN 
    console.log("月份是："+ month) 
} else { 
    console.log("输入月份数值正确。") 
}
```
- NEGATIVE_INFINITY：负无穷大，溢出时返回该值。该值小于 -MIN_VALUE（最大的负数是 -MIN_VALUE）。
- POSITIVE_INFINITY：正无穷大，溢出时返回该值。该值大于 MAX_VALUE。
- prototype：Number 对象的静态属性。使您有能力向对象添加属性和方法。
```typescript
function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
} 
 
var emp = new employee(123,"admin") 
employee.prototype.email = "admin@runoob.com" 
 
console.log("员工号: "+emp.id) 
console.log("员工姓名: "+emp.name) 
console.log("员工邮箱: "+emp.email)
```
- constructor：返回对创建此对象的 Number 函数的引用。

【Number 对象方法】
