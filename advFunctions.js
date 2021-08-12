/*Old way to do it*/
function first() {
	var greet = 'Hi';
	function second() {
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

/*New way to do it*/
const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

/*Scope - the variables created inside of functions, including their parameters, are local to the function. Every time we run the first function, above, the block of code gets executed and the greet variable gets created every time. Within in a function we make sure that everytime we run it, it's a clean slate. This behavior prevents accidental issues between functions.*/

/*Closures -the child scope always has access to the parent scope, It always rmembers there's a reference. Closures is saying a function ran, the function executed, it's never going to execute again, but it's going to remember that there are references to those variables, so the child scope always has access to the parent scope. Parent scope doesn't have access to their children.*/

/*Currying - the process of converting a function that takes multiple arguments into a function that takes them one at a time. Think of the arrows as functions below. Why do we do this - it's more extensible. */
const multiply= (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
/*To make the above work in the console, have to then call it with 2 numbers such as curriedMultiply(3)(4);*/

const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
/*Can set it up to multiply by 5 and in the console log you would call it up like this, and enter into the () the number you want to multiply by 5: multiplyBy5(11);

/*Compose: the act of putting two funcs together to form a 3rd function where the output of 1 func is the input of another*/
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5); /*we can have two brackets here because f(g(a)) has 2 brackets*/
/*When we enter this in the console, we get an answer of 7. In the compose(sum, sum) it means compose(f, g) and a is 5. when f(g(a)) runs it says a=5, then inner function g, which is sum. Sum is saying give me 5 and then we do the num + 1, which is 5+1, so a becomes 6 and then the f function runs, which is sum and sum is now 6 and then we do the num + 1 which is now 6+1 so we get 7.*/

/*Avoiding side effects and functional purity. Side effects are any actions that happen inside of the function that we didn't plan for. Functional purity - avoiding side effects and we always want to return a value. We want to deliver deterministic code. The input always returns the same value - this is determinism.*/

var a = 1;
function b() {
	a = 2; /*This is a side effect*/
}