/*
LHS 左侧查询 Left Hand Side​
赋值的目标
通常 赋值（=） 左侧的查询 
未查询到变量自动创建

RHS 右侧查询 Right Hand Side​
赋值的源头
通查为 赋值（=） 右侧的查询 
未查询到 抛出 ReferenceError

特殊情况
typeof x   // "undefined"


*/
a = b
// result: ReferenceError b is not defined
// a LHS b RHS

function a_fun(a_param){
  let b_local = a_param;
  return a_param + b_local
}
let a_global_fun_a = a_fun(1)
// result: 2
// LHS 3
// let a_global_fun_a = a_fun(1) => a_global_fun_a 
// let b_local = a_param; => a_param
// let b_local = a_param; => b_loacl
// RHS 4
// let a_global_fun_a = a_fun(1) => a_fun
// let b_local = a_param => a_param
// return a_param + b_local => a_param
// return a_param + b_local => b_local
