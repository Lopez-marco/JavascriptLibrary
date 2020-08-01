/*
FOR IN LOOPS
*/

//in does not require that the thing you loop through be number

let student= {name: 'peter', awesome: true, degree: 'javascript', week: 1}

for (item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', "british shorahir", 'burmese', 'maine coon', 'rag doll']

for(cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//lets write a for in loop that capitalizs the first letter of a name

let name = 'mArCo';
let capName; 

for(n in name){
    if (n == 0){
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    }
}
console.log(capName)
