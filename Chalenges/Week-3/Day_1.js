// WHITEBOARDING PRACTICE CHALLENGES
// COUNTING SUM CHALLENGE
// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers. 

    // let sum = 0
    // for(let i = 0; i<= 100; i++){
    //     sum = sum + i;
    // }
    // console.log(sum);

    // let total = 0
    // for(let i =100; i<= 200; i++){
    //     total = total + i;
    // }
    // console.log(total);

    // function(x , y){
    //     for(let i =x; i<= y; i++){
    //         x = y + i;
    // }
    // main(x,y);
    // console.log(main)

function countingSum(start, stop){
    let sum = start;
    for(let i =start + 1; i<= stop; i++){
        sum = sum + i;
}console.log(sum);
}
countingSum(1,100);


function sumAll(arr) {
    let sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumAll([35, 77]));
  

/////////////////////////////////////////////////////////////////////////////////

let animal = {
    animal: "Dog",
    name: "lucky",
    gender: 'Male',
    age: 1,
    likes:["Bananas", "iams dry dog food"]
    }

///////////////////////////////////////////////////////////////////////////////

// Area of a Trapezoid
// Write a function that accepts the parameters b1, b2, h 
// You function should console.log the area of a Trapezoid
// 1/2(b1 + b2)h


function trapezoid(b1, b2, h){
    console.log(.5*(b1+b2)*h);
}
trapezoid(5,6,10);