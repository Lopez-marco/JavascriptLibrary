/* 
ternaries

5-expresionsAndOperators
    03-ternaries.js
*/

let x = -6

x > 0 ? console.log('x is possitive') : console.log('x is negative');


if (x > 0){
    console.log('x is positive');
} else {
    console.log('x is negative');
}


let greeting = 'salutations!';

if (greeting.length > 10){
    console.log('that is a long greeting!');
}else if (greeting.length == 10){
    console.log('your greeting is exacly 10 charactes!');
} else {
    console.log('what a normal greeting');
}

greeting.length > 10 ? console.log('thats is a long Gretting'):
greeting.length == 10 ? console.log('your gretting is exacly 10 character'):
console.log('what a normal gretting');
