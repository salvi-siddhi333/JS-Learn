// singleton
// Object.create

//object literals

const mySym = Symbol("KEY1")

const user = {
    name: "Siddhi",
    lname: "Salvi",
    mySym: "TryCheckingTypeOf",
    [mySym]: "MyKey",
    age: 25,
    email: "siddhisalvi16@gmail.com",
}

//________accessing objects
// console.log(user.name);
// console.log(user["name"]);
// console.log(typeof mySym);//symbol
// console.log(typeof "mySym");//string
// console.log(typeof["mySym"]);//object
// console.log(user["mySym"]);

// user.name = "Samarth" //override value
// console.log(user["name"]);
// Object.freeze(user) //freeze
// user.name = "Siddhi"
// console.log(user);

//_______________function
user.greet = function(){
    console.log("Hello");
}
// console.log(user.greet());
// console.log(user.greet);


user.newFunc = function(){
    console.log(`Hello, ${this.name}`);//string interpolation
}
// console.log(user.newFunc());


// ____________________________SINGLETON
const singleobj = new Object()
// const singleobj = {} both are ways to create objects but above is singleton & this is non singleton(constructor)

singleobj.id = 123
singleobj.name = "Sam"
singleobj.logIn = false
// console.log(singleobj);

const regUser = {
    id: 123,
    name: {
        fullname: {
            Fname: "siddhi",
            Lname: "salvi"
        },
        maternalName: "sam"
    }
}

// console.log(regUser.name.maternalName);
// console.log(regUser.name);


// ________________Combining objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
//normal way to combine
const obj999 = {obj1, obj2}
// console.log(obj999);
//combining by assign()
const obj333 = Object.assign({}, obj1, obj2)//{} helps taking all further object's value in empty value. Its not mandatory if its not there the rest of object values will get stored in obj1
// console.log(obj333);
//combining by spread
const obj3 = {...obj1, ...obj2}
console.log(obj3);
