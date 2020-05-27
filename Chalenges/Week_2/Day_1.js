// for (let i = 0; i <= 100; i++)
// // console.log(i)
// // }

// // if (i % 3===0 && i % 5===0){
// //     console.log('Fizz Buss');
// // } else if  (i % 3===0){
// //     console.log('Fizz');
// // } else if (i % 5===0){
// //     console.log('Buzz');
// // } else {
// //     console.log(i)
// // }

// // i % 3===0 && i % 5===0 ? console.log('Fizz Buzz'):
// // i % 3===0 ? console.log('Fizz'):
// // i % 5===0 ? console.log('Buzz'):
// // console.log(i)


// switch(true){
//     case i %3===0 && i % 5===0:
//         console.log('Fizz Buzz');
//     break;
//     case i %3===0:
//         console.log('Fizz');
//     break;
//     case i %5===0:
//         console.log('Buzz');
//     break;
//     default:
//         console.log(i);

// }



// PIES CHALLENGE
// For Bronze, find all of the fruit pies and using string interpolation print a sentence including the
// name of the pie.
// For Silver, use a different loop and conditional to accomplish the same behaviour.
// For Gold, push all of the pies into a new array and have the new fruitPies array print once. 
// For Platinum, create an array of fruits. Use this array of fruit to compare against the pies
// array and push the pies that contain any of those fruits in the fruitPies array.




// console.log(`I have pies of 5 flavors ${pies[0]}, ${pies[1]}, ${pies[2]}, ${pies[4]}, ${pies[6]}.`);

// for(pie of pies){
//     console.log(pie.includes(pies));
//     if (pie.includes(pies)){
// } console.log(`hola` ${pies})
// }



let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];

// for(let i = 0; i < pies.length; i++){
//     console.log(i);
//     console.log(pies[i]);
// }

for (pie of pies) {
    console.log(pie);
    if(pie.includes ('apple')){
        console.log(`${pie} is a type of fruit pie!`);
    } else {
        console.log(`${pie} is not a type of fruit pie.`)
    }
}