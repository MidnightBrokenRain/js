/*
js 作用域 scope 有四种 

全局作用域 global 
var 在全局声明的变量 作用域为 global

局部作用域 local 
函数内部声明的变量 作用域为 local

脚本作用域 script
let const 在全局声明的变量 作用域为 script

块作用域 block 
let const 在{}中(不包含function(){})声明的变量 作用域为 block


相关：
左右查询 leftQueryRightQuery.js
*/

var a_global_var 
let a_script_let 
const a_script_const = 1

function a_scriptScope(){
  var a_local_var
  let a_local_let
  const a_local_const = 2
  {
    var a_local_var_2
    let a_block_let
    const a_block_const = 3

    function a_scriptScope2(){
      let a_local_let_2
      const a_local_const_2 = 4
    }
    a_scriptScope2 = 1
    console.log(a_scriptScope2);
  }
}

a_scriptScope()