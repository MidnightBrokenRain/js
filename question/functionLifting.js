
/*

未使用 var const let 的函数声明 a 会被提升至块作用域顶部并赋值（即 词法环境中blockScope.a=f()）同时提升至父作用域顶部 默认值window.a=undefined
代码执行 函数声明 行时 将块作用域内 blockScope.a 的值赋给全局变量window.a (window.a = blockScope.a)

！不要在块内 进行函数声明

相关：作用域 scope.js

*/
{
    console.log(a)
    a = 1
    function a(){ }
    a = 2
    function a(){ }
    a = 3
    console.log(a) 
}
console.log(a)

/*
result:
f a(){}
3
2

相关知识：作用域 scope.js

未使用 var const let 的函数声明 a 会被提升至块作用域顶部并赋值（即 词法环境中blockScope.a=f()）同时提升至全局顶部 默认值window.a=undefined
代码执行 函数声明 行时 将块作用域内 blockScope.a 的值赋给全局变量window.a (window.a = blockScope.a)

！不要在块内 进行函数声明 污染全局

*/