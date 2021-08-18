//BOM:浏览器对象模型

//1. window
window.alert(1);
console.log(window.innerHeight,window.innerWidth,window.outerHeight,window.outerWidth);

//2. navigator 封装了浏览器的信息
console.log(navigator.appName,navigator.appVersion,navigator.userAgent);

//3. screen
console.log(screen.width,screen.height);

//4. location 代表当前页面的url信息
    //location.assign() 设置新的地址
console.log(location);

//5. document 代表当前页面，HTML DOM文档树
    //document.title 标题
    //document.cookie 获取cookie
console.log(document);

//6. history 代表浏览器的历史记录
    //history.back() 后退
    //history.forward() 前进
console.log(history);
