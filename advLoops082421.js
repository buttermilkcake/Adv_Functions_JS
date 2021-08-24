const basket = ['apples', 'oranges', 'grapes'];

/*A basic loop setup*/
for ( let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
	}

/*forEach loop*/
basket.forEach(item => {
	console.log(item);
})

/*for of loop. We are iterating over this array. We are going one by one thru an item and look at these items. Iterating is able to be done on iterables. You can iterate over arrays and strings in js. You can't iterate over objects.*/
for (item of basket) {
	console.log(item);
}

/*This turns basket into a string that we can iterate over*/
for (item of 'basket') {
	console.log(item);
}

/*for in loop - allows us to loop over and see the object properties. What we're doing here is not iterating. We are enumerating b/c properties of an object are called enumerable. Apples, oranges and grapes are enumberable. Enumerating is for objects. Iterating is for strings.*/
const detailedBasket = {apples: 5, oranges: 10, grapes: 1000}
for (item in detailedBasket) {
	console.log(item)
}