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

console.log(loginUserMsg("Samarth"))
console.log(loginUserMsg())
