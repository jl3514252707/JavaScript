//1. 获得DOM节点
    //通过标签获得节点(为数组）
    let h1=document.getElementsByTagName("h1");

    //通过ID获得节点
    let p1=document.getElementById("p1");

    //通过class获得节点（为数组）
    let p2=document.getElementsByClassName("p2");

    //获得父节点下的所有子节点（为数组）
    let children=document.children;

//2. 跟新DOM节点
p1.innerText="123";
p2[0].innerHTML="<strong>123</strong>";

//3. 删除DOM节点
    //直接删除自己
    h1[0].remove();

    //先获取父节点，然后通过父节点删除自己
    let self=document.getElementById("p3");
    let father=self.parentElement;
    father.removeChild(self);

//4.插入节点
    //插入已存在的节点
    let h2=document.getElementsByTagName("h2");
    father.appendChild(h2[0]);

    //插入新的节点
    let newP=document.createElement("p");
    newP.innerText="新的P";
    father.appendChild(newP);

    //在某个节点的前面插入
    let newP2=document.createElement("p");
    newP2.innerText="新的P2";
    let p4=document.getElementById("p4");
    father.insertBefore(newP2,p4);
