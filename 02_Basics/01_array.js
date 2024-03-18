//array

const myArr = [0,10,35,23,31,34]
const myArr2 = new Array(1,3,4,5,6)
const heroes =["ironman","Thor","batman"];
//resizable
console.log(myArr[0]);
//shallow copy, //deep copy??


//Array metods
myArr.push(6)
myArr.push(63)
myArr.push(69)
myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

console.log(myArr.includes(8));//whether it includes 8  or not
console.log(myArr.indexOf(63));

const newArr = myArr.join()//change the datatype
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice,splice
console.log("ABN",myArr);
const myn1 = myArr.slice(1,3)
const myn2 = myArr.slice(1,4)
console.log(myn1);
console.log(myn2);

const myn3 =myArr.splice(1,3)
console.log(myn3);
console.log("C",myArr)

// difference between splice and slice
//splice manipulates original array