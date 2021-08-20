// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


const startLine = '     ||<- Start line';
let turtle = '       🐢';
let rabbit = '       🐇';
turtle=turtle.padStart(8);
turtle=turtle.padStart(8);
console.log(startLine);
console.log(turtle);
console.log(rabbit);



// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

const startLine = '     ||<- Start line';
let turtle = '       🐢';
let rabbit = '       🐇';
turtle = turtle.trim().padEnd(9, '=');
rabbit=rabbit.padStart(8);
console.log(startLine);
console.log(turtle);
console.log(rabbit);
/*The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string.*/

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key])

}) /* ear key/value pair on a separate line*/

let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
Object.entries(obj).map(value =>{
  return value[0] + value[1].replace('value[0]', '');
}) /*doesn't do the job either*/

let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
Object.entries(obj).map(value => value.join(" ")).join(' ')
/*this works*/