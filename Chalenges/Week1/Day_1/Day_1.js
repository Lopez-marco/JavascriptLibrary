// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. 
Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far.
 See if you can add that to your conditional!*/



var sampleName = "Marco";
var sampleName2 = 'Francisco';
console.log (sampleName, sampleName2);

var str = sampleName;
var n = str.length;
console.log (str.length);

var str = sampleName2;
var n = str.length;
console.log (str.length);

if (str.length >=5){
    console.log("Francisco's name its longer them my name.")
} else if (str.length <=5){
    console.log("My name its longer then Francisco")
}




let myName ='Marco';
let friend ='paco';

console.log(myName.length);
console.log(friend.length);


if (myName.length > friend.length){
    let letters= myName.length - friend.length
console.log(`${friend}'s name is shorter than mine by ${letters} many letters.`)
} else  if (myName.length < friend.length){
    let letters = friend.length - myName.length
console.log(`My name is shorther than ${friend}'s name by ${letters} letters.`);
} else {
    console.log('Our names are the sme lenght!');
}


// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */
/* GOLD 
Rewrite this as a ternary
*/

let lunch = {
    sandwich: 'ham',
    tomate: '1',
    drink: 'soda',
    chips: true,
    desert:{
        first: 'cokie',
        second: 'cake',
    }
}
console.log(typeof drink);


//////////////////////////

let object = {
    word: 'test',
    integer: 10,
    booboo: false,
    miniObject:{
        key: 'value'
    }
}

//console.log(typeof object.word)
//console.log(typeof object.miniObject);

let value = object.word;

if(typeof value === 'string'){
console.log('this is a string');
}else if(typeof value === 'number'){
console.log('this is a number');
}else if(typeof value === 'boolean'){
console.log('this is a boolean');
}else if(typeof value === 'object'){
console.log('this is a object');
}else{
console.log('what are you?!');
}

