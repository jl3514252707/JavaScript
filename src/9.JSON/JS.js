let people={
    name: "金磊",
    age: 18,
    sex: "male"
}

//将对象转化为JSON字符串
let JsonPeople=JSON.stringify(people);
console.log(JsonPeople);

//将JSON字符串转化为对象
let ParsePeople=JSON.parse(JsonPeople);
console.log(ParsePeople);