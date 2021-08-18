//1. Array可以包含任意的数据类型
let arr1=[1,2,3,0.1,'1',"1",1E1];
console.log(arr1);

//2. 给Array.length赋值会改变数组的长度,
let arr2=[1,2,3];
arr2.length=5;
console.log(arr2);

let arr3=[1,2,3];
arr3.length=2;
console.log(arr3);

//3. Array.indexOf() 通过元素获得下标索引
console.log(arr1.indexOf(2));

//4. Array.slice() 截取数组的一个片段，左开右闭
console.log(arr1.slice(1,3));

//5. Array.push()向末尾添加元素，Array.pop()删除尾部元素
let arr4=[1,2,3,4,5];
arr4.push(6,7);
arr4.pop();
console.log(arr4);

//6. Array.unshift()向头部添加元素，Array.shift()删除头部元素
let arr5=[5,4,3,2,1];
arr5.unshift(7,6);
arr5.shift();
console.log(arr5);

//7. Array.sort() 排序

//8. Array.reverse() 元素反转

//9. Array1.concat(Array2) 拼接数组1和数组2，返回一个新的数组

//10. Array.join() 使用特定的符号连接数组元素并返回值
console.log(arr5.join("-"));