console.log(num);//1
sayHi();

var num = 12;
console.log(num)//4

function sayHi(){
    console.log('Hi!');//2
    var a = 'hello';
    console.log (a);//3
    console.log(num)
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let myVar = 1;
 
function b(){
    console.log('function b', myVar);
}

function a() {
    console.log('function a');
    let myVar = 2;
    b();
}

a();

function a(){
    console.log('function a');

    function b(){
        console.log ('function b')
    }
     
}
