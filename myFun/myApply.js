/*
相关：
Object.defineProperty
myCall.js
*/


Function.prototype.myApply = function(el,args){
  if(typeof this !== 'function') throw Error(this+' is not a function')
  let obj = [null,undefined].includes(el) ? globalThis : typeof el !== 'object' ? Object(el) : el
  let temp = Symbol('temp')
  Object.defineProperty(obj,temp,{
    value:this,
    configurable:true,
  })
  let result = obj[temp](...args)
  delete obj[temp]
  return result
}

function sum(a,b){
  console.log('this',this);
  return a + b
}
let obj = {
  a:1,
  b:2
}
console.log(sum.myApply(obj,[2,3]))
console.log(sum.apply(obj,[2,3]))
