let a =10;
var b =25;
 b =24;
var c =30


if(true){
  let a =11// doesn't print 111
  a =12 // print 11;
 b =20;
 const v = 20;
 var d = 21;
 let e =24
}
console.log(a);
console.log(b);
console.log(c);  
// console.log(v);  => v is Not defined
console.log(d);  // d has a global scope
// console.log(e);  =>  e is not defined

//var is a variable with global scope in JavaScript. A variable has global scope if it is declared outside of a function or block scope, meaning it can be accessed from anywhere in the program. 
// if nothing mentioned it would have a global scope

