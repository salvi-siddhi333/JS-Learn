// Immediately Invoked FUnction Expression (IIFE)

// old style

// function conn(){
//     console.log("DB Connected");
// }
// conn()

// ______________________________________________


// iife style

// SYNTAX - ()() -1st paranthesis will have function and another is for calling function

(function conn(){
    console.log("DB Connected");
})();

// to remove global scope variable declaration pollution - IIFE is used for this reason(interview ques)

(() => {
    console.log("Next DB Connected");
})();

((name) => {
    console.log(`${name} DB Connected`);
})('Samarth');

// to write multiple iife, dont forget to add ";" at end of 1st iife