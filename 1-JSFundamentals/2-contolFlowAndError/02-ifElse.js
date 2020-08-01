//If else
let weather =75;

if (weather <70){
    console.log('wear a jacket');
} else {
    console.log('No jacket necesery!');
}

//You can blend complex conditionas and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both');
}

//Else if

//if-else statements can be chained

let age = 30

if(age>=25){
    console.log('yay! you can rent a car');
} else if (age >= 21){
    console.log('Yay! you can drink!');
} else if (age >= 18){
    console.log('Yay! you can vote!');
} else{
    console.log('Sorry, you are to young to do anything fun');
}