/*
Types

1-gramarAndTypes
    05.types.js
    */

    //Boolean 
    var on = true;
    console.log(on);

    let off = false
    console.log(off);

    //boolean can represent: true/flase, yes/no, on/off, 0/1

    //Undefined

/*
Undefines usually means a variable has been declared, but irs not been assigned a value
*/

let grass;
console.log(grass);

var undef= undefined;
console.log(undef);

//Null
/*
null means a varialbe has been declared ans assigned a value of null
*/
var empty= null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this war--null vallues
are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).
Undefined values are gifts given when the person giving has forgotten to put the gift
inside (opps!)*/

//Numbers
let myLiteralAge=90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = -999999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);

//Strings
//Strings is any value whitind quotes; Js spits out the value whiting the quotes
let stringeOne = "sinlge quotes";
let stringtwo = 'single quotes';
console.log(stringeOne , stringtwo);


//String concatenation vs additions
let first= 1050 + 100;
let second  = '1050' + '100';

console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

//Interpeletion
//Lets you use strings with dinamyc contet(they require backticks)

//Example 1:
let age = 32
let string = `my age is: ${age}`
console.log(string);

//Objets
/*
wWhat is a objets ?

s objets is a container the storer property names and their values
(it can hold multiple data types)

denoted by {}
have keys and values--color (key): 'blue' (value), separated with a colon, each 
key-value is separated with a comma
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log (hulk.age);
console.log(typeof hulk);

//Arrays
/*
Arrays store multiple values in an order way. They, too, hold multiple date types.

Denoted by []
has values ('blue', 'green', 'yellow'), separated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeza toothpaste','rinse brush', 'brush', 'clean toothbrush']
//Array indexing                   0                   1                2           3            4
//console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(typeof stepsToBrushTeeth);
