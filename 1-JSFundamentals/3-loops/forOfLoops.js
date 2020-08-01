/*
for of loops
*/
//of requires that you 'thing' you are looping through be iterable--that means it needs to be 
//number

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week; 1};

for (item of student){
    console.log(item);
}

let catArray = ['tabby', "british shorahir", 'burmese', 'maine coon', 'rag doll']

for(cat of catArray){
    console.log(cat, 'says meow');
}