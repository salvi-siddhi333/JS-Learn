// function add(num1, num2){
//     console.log(num1+num2);
// }

// add(3,2)
// _________________________________________________________________________
// -------------------------STRUCTURE
// function function_name(parameters){
//     function_defination
// }

// function_reference(arguments)//()-function_execution
// _________________________________________________________________________
function addMore(var1, var2){
    // const addition = var1+var2
    // return addition //nothing will get execute after return
    
    return var1+var2
}
const addition = addMore(2,3)
// console.log("Sum of two passed arguments is: ", addition)
// _________________________________________________________________________

function loginUserMsg(name){
// function loginUserMsg(name = "Sid"){
    if(!name){
    // if (name === undefined){
        console.log("Enter name");
        return // if this returns get execute no further code will execute and will give undefine
    }
    return `${name} just logged in`
}
// console.log(loginUserMsg("Samarth"))
// console.log(loginUserMsg())
// _________________________________________________________________________

function calculateCartPrice(...nums){ //rest operator. It is also called as spread operator(depends od its usage)
    return nums
}
// console.log(calculateCartPrice(100,200,300,400,500));
// _________________________________________________________________________

const user = {
    uname: "Sam",
    price: 999
}

function handleObjectFunction(someObject){
    console.log(`User name is ${someObject.uname} and its course price is ${someObject.price}`);
}
// handleObjectFunction(user)

//calling function by passing object
// handleObjectFunction({
//     uname: "Sid",
//     price: 399
// })

// arrayHandling
const myNewArray = [100,200,300]
function handleObjectFunction(arrayHandling){
    // return `The 1st position value in array is ${arrayHandling[1]}.`
    return `The 1st position value in array is ${arrayHandling[1]}.`
}
// console.log(handleObjectFunction(myNewArray));
console.log(handleObjectFunction([400,500,600]));