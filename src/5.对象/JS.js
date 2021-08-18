//1. 定义对象
let person={
    name: "金磊",
    age: 18,
    sex: "male"
};

//2. 输出对象的属性
console.log(person.age);

//3. delete 动态地删除属性
delete person.sex;

//4. 动态地添加属性
person.weight="70kg";

//5. 判断一个属性是否在这个对象中
console.log("age" in person);

//6. 判断一个属性是否在这个对象中（不包含继承来的属性）
console.log("toString" in person);
console.log(person.hasOwnProperty("toString"));