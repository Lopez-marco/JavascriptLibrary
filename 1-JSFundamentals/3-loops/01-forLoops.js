/*
Loops

3-loops
    01-forLoops.js
*/

/*
Loops offer a quick and easy way to do somthing repeatedly

there are many different kinds of loops but they all do roughly the thing;
For statment 
do while
while
labeled
break
continue
for in
for of 
.forEach
.map
*/

//loop structure: a) creation of an idexing variable b) a run condition c) change to the indexing variable

//count to 10 from 0 and log the number;
// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

for(let i = 25; i<= 35; i++){
    console. log(i)
}

for (let i = 55; i >=35; i=i-1){
    console.log(i);
}
// //loops can run infinitely
// for (let i + 0; ; i++){
//     console.log(i);
// }

//counts to -25 by -3, starting from 2, logs the number
for (let i = 2; i >=-25; i=i -3){
    console.log(i);
}

//display the letter in a name individually
let name = 'kinkade';

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of ariables:

let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}









var i;
function evenorodd() {
    for(var i = 0; i <= 10; i++) {
     console.log(i);
     if(i % 2 == 0) {
       console.log('The number is even!')
     } else {
       console.log('The number is odd!')
     }
  }
     }
     evenorodd();