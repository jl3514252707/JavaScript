//定义一个类
class student{
    constructor(name){
        this.name=name;
    }

    hello(){
        alert("hello")
    }
}

let jl=new student("jl");
let kl=new student("kl");
console.log(jl.name);
console.log(kl.name);
jl.hello();
kl.hello();

//继承
class high_student extends student{
    constructor(name,grade) {
        super(name);
        this.grade=grade;
    }
    hello(){
        alert("HELLO");
    }
}


let jin=new high_student("jin",100);
console.log(jin.name+jin.grade);
jin.hello();