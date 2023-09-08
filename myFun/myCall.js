/*
相关：
Object.defineProperty
myApply.js
*/


Function.prototype.myCall = function(el,...args){
  let obj = [null,undefined].includes(el) ? globalThis : typeof el !== 'object' ? Object(el) : el
  let temp = Symbol('temp')
  Object.defineProperty(obj,temp,{
    value:this,
    configurable:true,
  })
  const res = obj[temp](...args)
  delete obj[temp]
  return res
}

function sum(a,b){
  console.log('this',this);
  return a + b
}
let obj = {
  a:1,
  b:2
}
console.log(sum.myCall(obj,2,3))
console.log(sum.call(obj,2,3))
