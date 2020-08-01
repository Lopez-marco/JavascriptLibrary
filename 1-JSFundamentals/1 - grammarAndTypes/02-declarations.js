/*
variables

1-grammarAndTypes
  02-declarations.js
  */

  //what is a variable?
  var a = 1;
  var b = 2;
  console.log(a + b);


  //notes on naming variables;
  //1) a variable must begin with a letter, underscore, or dollar sign
  //2) numbers may fallow the above characters. but cannot come first
  //3) Javascript is case sensitive--"hello" and "Hello" are different variables

  /*
  DECLARARION< INITIALIZACIONS< ASSIGMENTS
  */
  /* 
  Declarations refer to when we "declare" a variable

  Initializations refer to when a variable is assigned a value

  Assigment refers to giving a variable a calue. This can be after initialization.
  */

  var x;
  console.log('Declaraion 1:', x);//undifined 

  x = 10;
  console.log('Initializacion 1:', x);//10

  x = 333;
  console.log('Assigment 1:', x);//33

  var y;
  console.log(y);

  y = 'hello';
  console.log(y);

  y = 'you are my friend';
  console.log(y);

  /*
  Var, Let, and Conts:
  
  Var = 'old' keyword for variables
  let = "new" keyword for variables (introduced with ES6)
  const = also 'New', declares unchangeable variables
  */

  let tonight = 'great!';
  const elevenFifty = 'amazing!';
  console.log(tonight, eleventFifty);

  tonight = 'lovely';
  console.log(tonight, eleventFifty)

 // elevenfifty = 'Super!';



 function howManySeconds(hours) {
let y = hours;
  let x=(y*60*60);
}
howManySeconds(2);
