// // Set up two varibles equal to any two integers
// // Write a conditional that checks if the first varible is divisible by the second
// // If it is console log `value of ${a} is divisble by value of ${b}`
// // If it is not console log the remainder
// // Convert conditionals to ternary and switch.

// let a = 147;
// let b = 17;


// // if (a % b === 0){
// //     console.log(`The value of ${a} is divisable by the value of ${b}.`);
// // } else {
// //     console.log(`${a} divided by ${b} leaves a remainder of ${a % b}.`);
// // }

// // a % b === 0 ? console.log(`The value of ${a} is divisible by the value of ${b}.`):
// // console.log(`${a} divided by ${b} leaves a remainder of ${a % b}.`);

// switch(true){
//     case a % b ===0:
//         console.log(`The value of ${a} is divisable by the value of ${b}.`);
//         break;
//     default:
//         console.log(`${a} divided by ${b} leaves a remainder of ${a % b}.`);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Checking a string
// BRONZE
//Write a conditional that checks if a string is empty
//If it is console log 'Please type something'
// SILVER
//If it is not console log the string
// GOLD
//add to your conditional to check if the string has more than 10 characters
//if it does console log please type les

    if (form === null ||  
        form === undefined || 
        form.length === 0) { 
        
        console.log("Name cannot be empty\n");  
    } else { 
        console.log("Your response has been recorded\n"); 
    } 
