//遍历数组
let number=[1,2,3,4,5,6];
//1. for循环
for(let i=0;i<number.length;i++){
    console.log(number[i]);
}

//2. Array.forEach(function(){})循环
number.forEach(function (value){
    console.log(value);
});

//3. for in
for(let index in number){
    console.log(number[index]);
}

//4. for of
for(let value in number){
    console.log(value);
}