

/* Question #1: create a function called biggestNumberInArray() that takes an array as a parameter and returns the biggest number.  biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100; Use at least 3 different types of javascript loops to write this: 
const array = [-1,0,3,100, 99, 2, 99] should return 100
const array2 = ['a', 3, 4, 2] should return 4
const array3 = [] should return 0*/

var ages = [-1,0,3,100, 99, 2, 99];
var largest = 0;
for(let i = 0; i < ages.length; i++) { 
   if(largest < ages[i]) { largest = ages[i]; }} 
   console.log(largest);

/*can also do this, but seem excessive to have the function there*/
function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest
}

const array2 = ['a', 3, 4, 2];
  array2.forEach(item => {
    if (item > 3)
    console.log(item);
  })
/*can also do this*/

function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(item => {
    if (highest < item) {
      highest = item;
    }
  })
  return highest;
}

const array3 = [];
function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

amazonBasket = [
  'glasses: 1',
  'books: 2',
  'floss: 100'
]
amazonBasket.includes("trays");

/*Can also do this*/
function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}