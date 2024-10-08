//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log("Data Type of Score is: " + typeof score);
// console.log("Data Type of Score Value is: " + typeof scoreValue);
// console.log("Data Type of LoggedIn is: " + typeof isLoggedIn);
// console.log("Data Type of Outside temp is: " + typeof outsideTemp);
// console.log("Data Type of Email is: " + typeof userEmail);
// console.log("Data Type of ID is: " + typeof id);
// console.log("Data Type of Another Id is: " + typeof anotherId);
// console.log("Data Type of Bignumber is: " + typeof bigNumber);
// console.log("Data Type of Object Var is: " + typeof heros);
// console.log("Data Type of Another Object is: " + typeof myObj);
// console.log("Data Type of Function is: " + typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// ___________________________________________________________________________

// ********JavaScript is Dynamically typed language as all data types checks are performed during runtime

// ___________________________________________________________________________

// Stack(Primitive: Makes changes in copy) , Heap(NonPrimitive: It dont change the vale it gives reference)

// Primitive(Stack) Example
let naam = "Siddhi"
let otherName = naam
otherName = "Sid"
console.log(naam);
console.log(otherName);

// Reference(Heap) Example
let myData = {
    myEmail: "sid@github.com",
    refNo: 1234
}

let nextData = myData
nextData.myEmail = "dhi@google.com"

console.table([naam, otherName, myData.myEmail, nextData.myEmail])



// Refer StackHeap.jpg for memory visualization


