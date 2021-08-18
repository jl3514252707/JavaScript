//1. Map 键值对
let name=new Map([["tom",100],["mike",90],["jack",80]]);
    //通过key获得value
    let score=name.get("tom");
    console.log(score);
    //添加
    name.set("jane",70);
    //删除
    name.delete("mike");

//2. set 无序不重复的集合
let number=new Set([2,3,1,1,2,3]);
console.log(number);
    //添加
    number.add(2);
    //删除
    number.delete(3);
    //是否包含
    console.log(number.has(1));