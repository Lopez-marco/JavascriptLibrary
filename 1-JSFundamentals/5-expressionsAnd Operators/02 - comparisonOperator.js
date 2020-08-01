/*
Comparation Operators 

5-ExpressionsAnd Operators
    02-comparisonOperators.js
*/

//Equality comparison operator (compara los numeros igual = true   diferentes=false )(quierre ver lo mismo)
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4');

//string equality comparison operator(compara los numeros igual= true   fiferente=false  gramatico) compara types
console.log(3 === 3);
console.log('3' === 3);


//not equal coparison operator ( no quiere ver lo mismo)
console.log('3' != 4);
console.log('3' !=3);

//strict not equal compartion operator(compara el valor y el type)
console.log('3' !== 3);
console.log(3 !== 3);

//greater then 
console.log(3 > 2);
console.log(2 > 3);

//less than 
console.log(2 < 3);
console.log(3 < 2);

//greater than or equal to 
console.log(3 >=2);
console.log(3 >=3);

//less than or equal to 
console.log(2 <= 3);
console.log(3 <= 2);

//and (both expressions or either side of the operator must be true for 'And' to return true)
console.log(1<2  && 3>0);
console.log(2<1 && 3>0);

//or (either expresion on one side of the operator must be true for 'or' to return true)
console.log(1<2 || 3<0);
console.log(2<1 || 3<0);

let obj = {key: 'test'}
console.log(obj == {key: 'test'});

console.log (obj == Obj);

let arr = [1,2,3,4];

console.log(arr == [1,32,3,4]);
console.log(ar == arr);

