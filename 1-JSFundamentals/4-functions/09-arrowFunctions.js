/*
AROOW FUNCTIONS
*/

//normal functio declaration           (name functions)
 function cofee(){
     return 'cofee is good';
 }

 //normal funtion expression             (unname functions)

 let tea = function(){
    return "tea is healty";
 }
/////this means invoque 
 console.log(cofee());
 console.log(tea());

 //arrow functions are *always* anonymous
 //arrow function expresion             (uses a arrow)
 let hotChocolate = () => {
     return 'hot chocolate is king';
 }

 console.log(hotChocolate());
 
//puedes usarlo despues pero no antes hosting (console.log)
 let animals = (kittens, puppies) => {
     return `i have ${kittens} cat(s) and ${puppies} dogs(s)`
    }
  console.log(animals(3, 2));
  console.log(animals(0,0));

  //concise vs. block body
  //concise body

  let apples = x => `thera ${x} apples`;
  console.log(apples(10));

  //block body
let bananas = (x) =>{
    return `thera are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly writen in a block-body arrow function 

let func = () => 'hi';

console.log(func());

let secondFunc = () => 'hi';
console.log(secondFunc());