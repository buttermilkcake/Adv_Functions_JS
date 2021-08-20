/*let + const - new ways of declaring variables. Const stands for constant. We no longer need to use var.*/

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
}

/*with variable, we were only able to create a scope inside of a function. With let, you can create a variable inside of if, so the only way to access it is inside the if. The above gives you and answer of false, so do below instead. If let is in curly brackets, it creates a new scope. If you change the let in the curly brackets to variable, no new scope is created inside the curly brackets. Don't use variable anymore, use let. A const is a constant variable, so you can't change it. Const is handy when you need to make sure a variable never changes - it is a security thing. Use const if using a variable that doesn't chnage. Use let when using a variable that changes.*/

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

/*because this is a constant, you will never be able to change anything about this object. However, you can change the properties of the objects, you just can't re-assign the variable. The properties are player, experience and wizardLevel.*/
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

/*an easier way to handle, call objects is this, this is destructuring*/
const { player, experience } = obj;
let { wizardLevel } = obj;


/*Object properties in ES6. These are new ways to assign properties. */
const name = 'john snow';

const obj = {
	[name]: 'hello',
	['ray' + 'smith']: 'hihi' 
}

/*Can remove declaration of property and value if they are the same and just list them out like below in the const obj*/
const a = "Simon";
const b = true;
const c = {};

const obj = {
	a,b,c
}


/*template string*/
/*Before we had to do this*/
const greet = "Hello" + name + "how are you?" + greeting + "!"

/*With template strings you can do this*/
const greetingBest = `` /*these are the little marks on the key to the left of 1, and they stand for template strings. They are called back tics*/

const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = "Hello " + name + " you seem to be doing " + greeting + "!"
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
/*You call the above in the console by typing in greetingBest*/

/*default arguments. We provided default arguments in case no other values are given, we're able to get this function to work. You call it in the console by typing in greet(). If you want to change the values in the console, you would type in greet("John", 50, "monkey");*/
function greet(name='', age=30, pet='cat'){
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

/*javascript type, Symbol. To call this in console, type in sym1, sym2, or sym3. Symbols are used because they create completely unique types. So below, sym2 != sym3. Symbol is not a very common type.*/
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

/*Arrow function. This is the old way. To call this in the console do this: add(4,2);*/
function add(a,b) {
	return a + b;
}

/*Arrow function replaces the above with this. with a an arrow function that has a single return, you can just do this below. To call it console log do this add2(4,2);*/
const add2 = (a, b) => a + b;

/*ES7 introduced in 2016. Unlike ES6 which had a lot of changes. ES7 has 2 additions.*/

/*1. Includes method was added on strings and arrays*/
.includes()
'Helloooo'.includes('o'); /*If hellooo includes an o, which it does, we'll get an answr of true*/

/*Can also use it on arrays*/
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog')/*true*/
pets.includes('bird')/*false*/

/*2.Exponential Operator*/
const square = (x) => x**2 /*x to the power of 2*/
/*to make this go in console, need to type in square(2) and will get answr of 4*/

const cube = (y) => y**3
cube(3)
cube(4)

/*ES8*/
/*string patterns*/
.padStart()
.padEnd()
'Turtle'.padStart(10); /*This puts 10 spaces in front of turtle in console*/
'Turtle'.padEnd(10); /*10 spaces after turtle. Used to align characters*/

/*trailing functions - when you start getting big parameter lists, they list things out vertically. When you have long parameter lists, the ending comma is now valid*/
const fun = (a,b,c,d,) => {
	console.log(a);
}
fun(1,2,3,4,) /*this returns a value of 1*/ 

Object.values
Object.entries

Object.keys /*allowed us to do s/t like arrays on an object*/
let obj = {
	username0: 'Santa',
	username1: 'Rudolph',
	username2: 'Mr.Grinch'
}

/*for each key, index (username) in the array. We're grabbing the object with the key username. This is one way for us to iterate or loop through objects.*/
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key])	
})

/*Object.values, this pulls out the values for each object above.*/
Object.values(obj).forEach(value => {
	console.log(value);
})

/*Object.entries - this pulls out an array of username and object. This gives you a lot of power to use all the array functions*/
Object.entries(obj).forEach(value => {
	console.log(value);
})

/*Let's say we want a display name that is better than above. We're doing 1 because we want to grab santa, rudolph and mr. grinch. we want to remove 0,1,2 from username part, and add them to santa, rud, etc and put them together in a new string - rep by empty string below.*/
Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})

/*Async Await*/