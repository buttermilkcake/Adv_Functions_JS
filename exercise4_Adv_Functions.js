//Solve these problems:

//#1 Create a one line function that adds two parameters
const sum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
/*13*/

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
/*31*/

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
/*17*/

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
/*We start with 10. The add1 and add2 stand f & g, a = 10. We add 1 to 10, we assign the 1 to g and this gives us 11. Then we add the 5 onto this and it becomes 16. The add5 is assigned to f. So our answer is 16. We start on the innermost parenthi, a, then focus on the next one, g and then the outermost one, f.*/

//What are the two elements of a pure function?
/*Input and Value - I was wrong. The correct answer is below:
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
*/
