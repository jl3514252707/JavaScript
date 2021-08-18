//1. 得到输入框的值
let username=document.getElementById("username");
username.value="123";
console.log(username.value);

// 2. 得到单选框，多选框的值
let boy=document.getElementById("boy");
let girl=document.getElementById("girl");
if(boy.checked){
    console.log(boy.value);
}else{
    console.log(girl.value);
}


