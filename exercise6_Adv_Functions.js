//Evaluate these:
//#1
[2] === [2] /*both of these are false, I would have thought they are true. Unless is because first one is comparing 2 dif arrays with the same value in them, doesn't make them equal.*/
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; /*4*/ 
const object2 = object1; /*4*/
const object3 = object2; /*4 - these are all 4 since 5 was redefined to 4 in object1.a*/
const object4 = { a: 5}; /*5*/
object1.a = 4; /*4*/


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;	
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
		}
	play() {
		console.log(`Mooooo, I'm ${this.name}, I'm a ${this.type}, and I am ${this.color}`);
	}
}
const cow = new Mamal('Astra', 'cow', 'tan');
/*Then have to type in mamal1.play() in console to get it to run*/