//arrays are resizable, has mixed data type and can access by index number
// array copy operation creates SHALLOWS COPIES rather than DEEP[Shallow copy is copy who share same refernce point means data is override]
const myArr = [1,2,3,4]
// console.log(myArr[3])

const MyNewArr = new Array(1,2,3,4,"Siddhi",6)
// console.log(MyNewArr[3])


//array methods
MyNewArr.push(7)
MyNewArr.push("Pop this Value") //.push() adds value
// console.log(MyNewArr)

MyNewArr.pop() //.pop() removes the last value from stack
// console.log(MyNewArr)

MyNewArr.unshift(9) //.unshift("value") will add value at the starting position
// console.log(MyNewArr)

MyNewArr.shift() //.unshift("value") will remove value at the starting position
// console.log(MyNewArr)

// console.log(MyNewArr.includes("Siddhi"));
// console.log(MyNewArr.indexOf(8));

const myArrJoin = MyNewArr.join()

// console.log(myArrJoin);
console.log(MyNewArr);

// console.log(typeof(myArrJoin));
// console.log(typeof(MyNewArr));

//SLICE , SPLICE

console.log("A ", MyNewArr);
const a = MyNewArr.slice(1,4)
console.log(a);

console.log("B ", MyNewArr)
const b = MyNewArr.splice(1,4)
console.log(b);