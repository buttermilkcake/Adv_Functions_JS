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

/*ES10*/
/*flat() - A method we can use on arrays. If you have several arrays within an array, it will flatten them all into 1 array.*/

const array = [1,[2,3],[4,5]]
array.flat()

/*this is only flattened 1 level. We can tell it how many layers to flatten it. */
const array2=[1,2,[3,4[5]]]
array2.flat()

const array2=[1,2,[3,4[5]]]
array2.flat(2)/*tell it how many layers you want to flatten it.*/

const mucho = [['flower'], 'sun', 'moon', ['stars', 'elves'], [[[['yellow_rose']]]]]
mucho.flat(50)

/*this cleans up empty data*/
const entries = ['bob', 'sally',,,,,,,,,'cindy']
entries.flat()

/*Uses the map method on an array. For ea item that we're going to flatten, we're going to get a creature and ea creature is going to get a moon as a friend. So we're flattening our mucho array and mapping over this flattened array and doing a map function to it.*/
const mucho = [['flower'], 'sun', 'moon', ['stars', 'elves'], [[[['yellow_rose']]]]]
const muchoChaos = mucho.flatMap(creature => creature + 'moon')
/*will call this in console by typing in muchoChaos*/

const userEmail = '       eddytheeagle@gmail.com'
const userEmail2 = 'johnnydangerous@gmail.com     '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

/*fromEntries - transforms a list of key value pairs into an object*/
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
Object.fromEntries(userProfiles)
Object.entries(obj) /*this is from ES8 and it transforms an object into a list of key value pairs*/

/*try catch block allows us to try a piece of code and if there are any errors, to catch them.*/
try {
	4+5
	true + 'hi' /*this is type coercion and true is changed into a string*/
	bob + 'hi'
} catch {
console.log('you messed up')	
}

/*ES2020*/
/*BigInt - this is a new type. can type into console typeof 4 and it will return number. BigInt stands for big integer. MAX_SAFE_INTEGER */
typeof 1n /*this returns bigint in console. More on bigints here: https://javascript.info/bigint*/
Number.MAX_SAFE_INTEGER /*can enter this into console*/
/*BigInt is what we use we want to us a number that is larger than the max safe integer and we want to do calculations with it. We can’t mix bigints and regular numbers. We should explicitly convert them if needed: using either BigInt() or Number(), like this:*/
let bigint = 1n;
let number = 2;

// number to bigint
alert(bigint + BigInt(number)); // 3

// bigint to number
alert(Number(bigint) + number); // 3

/*Optional Chaining Operator ?.*/
let will_pokeman = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6,
		power: ''
	}
}

let andrei_pokeman = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: 'lightning'
	}
}
/*old way*/
if (andrei_pokeman.pikachu && andrei_pokeman.pikachu.weight) {
	let weight2 = andrei_pokeman.pikachu.weight	
} else {
	let weight2 = undefined
	console.log(weight2) 
}

/*chaining method*/
let weight3 = andrei_pokeman?.pikachu?.weight
console.log(weight3)

/*Nullish Coalescing Operator ??*/
let power = andrei_pokeman?.pikachu?.power || 'no power'
console.log(power)
/*The or || operator works by checking if the statement is truth-y. If it's not truth-y, then it resorts to no power. The empty string for power under will_pokeman evaluates as false. But if we want to check if the power is truly an empty string - we can do the nullish coalescent - it checks if it is null or undefined rather than truth-y. So the let power statement would look like this. this operator is useful when you would normally use the or command.*/
let power = andrei_pokeman?.pikachu?.power ?? 'no power'
console.log(power)

//The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.//