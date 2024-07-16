const name = "Samarth"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shri-Swami-samarth')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   samarth    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://samarth.com/samarth%20shri"

console.log(url.replace('%20', '-'))

console.log(url.includes('samarth'))

console.log(gameName.split('-'));