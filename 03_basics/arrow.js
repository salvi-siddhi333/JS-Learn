const user = {
    name: "siddhi",
    cost: 999,

    welcomemsg: function(){
        console.log(`${this.name} welcome to website `);
        console.log(this);
    }
}

// user.welcomemsg()
// user.name = "sam"
// user.welcomemsg()

// console.log(this)

// _________________________________________________________________________________________________________

// function checkThis(){
//     const checkName = "Sam"
//     console.log(this.checkName); // .this works in OBJECTS only doesnt work in function
// }
// checkThis()

// _________________________________________________________________________________________________________

// const checkThis = function(){
//     const checkName = "Sam"
//     console.log(this.checkName); //another way of function which says that .this not working in function
// }
// checkThis()

// _________________________________________________________________________________________________________

// const checkThis = () => {
//     const checkName = "Sam"
//     console.log(this.checkName); 
// }
// checkThis()

// _________________________________________________________________________________________________________


// Basic Syntax
// () => {}
//WAY1-explicit return - if you are using curly braces after arrow you need to return the value
const add = (num1, num2) => {
    return num1+num2
}
console.log(add(2,1));

//WAY2-implicit return - if you are wraping return in circular bracket then no need of return keyword.
const sub = (num3, num4) => (num3-num4)
console.log(sub(2,1));