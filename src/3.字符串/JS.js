//console.log 在控制台输出


//1.可以用单引号('')或者双引号("")
console.log("a");
console.log('a');

//2.多行字符串编写（``）[tab键上面的符号]
let msg1=`hello
world
!
`;
console.log(msg1);

//3.模版字符串
let msg2="金磊";
let msg3=`你好呀，${msg2}`
console.log(msg3);

//4.substring(x,y)，输出从下标为x到下标为y的字符，包含x，不包含y
let student='student';
console.log(student.substring(1,5));