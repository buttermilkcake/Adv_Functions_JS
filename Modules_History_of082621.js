//This is a good resource as well: https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde
/*Climbing the Mountain of Modules
When we first started learning js, we had an html file and the first time we used js, we had inline scripts. We just inlined all of our JS within the hmtl file. 2 big problems with this: 

1. Code Reusability - if it becsomes a massive js file, there is lack of code reusability. If we need to another page, we have to copy this code and put it into the other hmtl file.

2. Global Namespace - once you use up a as a variable, you can never use a again and if you forget that is a big problem. You don't want to pollute the global namespace - the window object with all of these names. 

From inline scripts we moved to script tags in html files. We played around with bootstrap and jquery. We had our jquery file loaded first and our js file loaded 2nd. This way e/t is outside of the html. There are 3 main problems with script tags:
1. If we need to add another page, we need to copy/paste this script tags.
2. Lack of Dependency Resolution - You are responsible for making sure that the scripts are added in the proper order.
3. This doesn't solve the global namespace problem.

 From script tags, we moved on to IIFE - immediately invoked function exocution. It wraps a function in brackets like below:*/
 var myApp = {}

 (function(){
 	myApp.add = function(a,b) {
 		return a + b;
 	}
 })();

 /*js reads this and says, oh, I have to evaluate and execute this. The brackets at end say run this, so after eval this, run this function. This is a confusing way to make sure you dont pollute the global namespace. The first var, myApp will be on the window object, but E/t that is inside a function creates a new scope. All the files b/c they are wrapped in the IFEE are insdie their own scopt and if you want to add to myApp, you just added e/t as a property as a method. There is one issue with this - the order of the files are still important - so there is still lack of dependency resolution and it doesn't look very pretty.*/

 /*From IIFE we moved onto browserify - it used common js. If you wanted ot have on 1st js file (add.js) a function called add on module.exports and in the 2nd js file, we can require the add and then add add function to the js2 file. Browersify uses this common syntax, but it is actually a module bundler. A module bundler runs b/f you put the website online. What this means is that it reads thru all the js files and it bundles e/t into 1 file. Once you run all the files thru browserify - which allows to dump all of the old script tag files into it - as long as you use the common js syntax, it will know what to do and automatically create 1 file. It will usually be called s/t like bundle.js. When it's out on the internet, it doesn't matter how it looks, we're just using this to send it to the server. When developers are working on it, we have separate files. We run it thru browserify right b/f we deploy.*/

 /*js1*/
 module.exports = function.add(a,b){
 	return a+b;
 } 

 /*js2*/
 var add = require("./add");

/*All of previous problems with js are b/c we didn't have a module system built into the lang. Think of modules as building blocks, dif pieces of code. Ea piece is good at doing 1 thing. The reason we have so many dif ways of importing and exporting modueles is b/c js didn't have this module system. Things have recently changed with the introduction with ES6. As of 2018, there are 2 modules systems - CommonJS (CJS), which is what node.js has historically used and ESM (EcmaScript Modules), which is what ES6 is.*/

/*ES6 and Webpack2*/
/*with es6, we have 2 new things: export and import*/
//js1 - you can export several things with this method
export const add = (a, b) => a + b;
//or - you can only export one thing with this method
export default function add() {
	return a + b;
}

//js2
import { add } from './add';
//or
import add from './add';

/*However, browsers aren't supporting everything. So we have webpack - a module bundler. Like browserify, it traverses the dependency tree into a single file, or it can even have multiple files based on your needs. With webpack we can use ES6 in all browsers. So this is what we're using now - ES and Webpack*/

/*A Webpack has a config file and we have an output called bundle.js. There is usually one person on the team that configures this file.*/
module.exports = {
	entry: './app/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	}
}