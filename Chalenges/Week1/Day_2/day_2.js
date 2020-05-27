/*
Challenge:
Bronze:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
Silver:
Write this as a Ternary
Gold: 
Write this as a Switch Statement
// */
let fb =7

// // console.log(fb% 3 == 0)


// /// value to test ? what do you want to happen if true :  what do you want to happen if false
if (fb % 3 == 0 && fb % 5 == 0 ){
    console.log('fizz buzz');
} else if (fb % 5 == 0){
    console.log('Buzz');
} else if (fb % 3 == 0){
    console.log('Fizz');
} else {
    console.log('no Fizz or Buzz');
}

let fb = 15
fb % 3 == 0 && fb % 5 == 0 ? console.log('Fizz Buzz'):
fb % 5 == 0 ? console.log('Buzz'):
fb % 3 == 0 ? console.log('Fizz'):
console.log(fb);


let fb = 6

switch(true){
    case fb % 3 === 0 && fb % 5 ===0:
        console.log('Fizz Buzz');
        break;
    case fb % 5 === 0:
        console.log('Fizz');
        break;
    case fb % 3 === 0:
        console.log('Buzz');
        break;
    default:
        console.log('NA');
}



