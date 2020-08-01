/* 
swich statments
*/

let friend = 'tom';
switch(friend){
    case 'tom':
        console.log("hey tom, when will you bring sourdough bread for me?");
        break;
    case 'Kenn':
        console.log('hey ken, do you own a wolf in you backyard?');
        break;
    case 'alex':
        console.log('hey alex, how many Magic card do you own?');
        break;
    default:
        console.log(`im sorry, ${friend}, but do i know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){// or camparision operartor use || compara ambos type of
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep in not a string or a number');

}