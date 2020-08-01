// setTimeout(() => console.log('this is a test of time outs'), 1000);

let promise = new Promise(function(resolve, reject){
setTimeout(() => {
    if (false){
        resolve('sucess');
    } else {
        reject('failure');
    }
}, 3000);
})

promise
    .then(sucess => console.log(sucess))
    .catch(err => console.log(err));

console.log('this code is after our promise');

function playFunc(){
    return 5;
}
console.log(playFunc());