/*
ARRAYS
*/

//what is a array?
//has[]barckets
//can hold multiple datatypes
//arrays can list datatypes in a ordered, numberd way

let students = ['Tony', 'marshal', 'rhys', 'ray', 23, true, ['ryan', 'Iesha']];
//hidden keys:     0        1        2        3    4    5      6
// console.log(typeof students); //typeof doesnot tell me my variable is a array will show object
// console.log(students instanceof Array); //instanceof tells me my array is a array
// console.log(students[2]);
// console.log(students[1]);
// console.log(students[6]);

let x = students[6][1];
console.log(`hello ${x}, you look nice today.`);

//recal for-of loop -> gives the values of the array
let food = ['pecan pie','shrimp','quesadilla','cheese cake', 'hogdog'];

for(f of food){
    console.log(f+ 'is amazing!');
}

//array methods
food.push('pizza');// adding to the end of a array
console.log(food);
food.splice(1, 1, 'bananas');
console.log(food);
food.splice( 2 , 0,'sweet potato pie');//ask for an insertion point, how many things to remove, then the 
//the item or items add
console.log(food);
food.pop();//removes the last element of a array
console.log(food);





function getFirstValue(arr) {
	let x = arr
	return(x[0]);
}
    getFirstValue([1,2,3,4,5]);