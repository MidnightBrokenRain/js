/**
 * Number.isNaN && isNaN
 * Number.isNaN(params) params 必须为 NaN 才会返回 true
 * isNaN(params) params 非number类型 先转成number类型 然后再判断是否为 NaN
 * 
*/

Number.myIsNaN = function(str){
  if(typeof str === 'number') return str !== str
  return false
}
function myIsNaN(str){
  str = +str
  return str !== str
}


console.log(isNaN({a:1}))
console.log(myIsNaN({a:1}))