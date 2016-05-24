/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
// sorts the items within an array, and by default, sorts values as strings in alphabetical order

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.sort());

>> [ 'Black Raspberry', 'Chocolate', 'Mint', 'Strawberry', 'Vanilla' ]


// .concat()
// joins values of two or more strings or arrays

var bicycles = ["All-City", "Surly", "Kona"];
var cars = ["Honda", "Toyota"];
console.log(bicycles.concat(cars));

>> [ 'All-City', 'Surly', 'Kona', 'Honda', 'Toyota' ]


// .indexOf()
//searches the array for the specified item and returns its position

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.indexOf("Mint"));

>> 3

// .split()
// splits strings into arrays of substrings and returns the new array. Can either use (" ") to call and return separated values for each character, or (" ", number) to split into array with only that number of values.

var hello = "Hello, how are you today?";

console.log(hello.split(" ", 2));

>>[ 'Hello,', 'how' ]

// .join()
//joins elements of an array into a string

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.join(" cone "));

>>Strawberry cone Chocolate cone Vanilla cone Mint cone Black Raspberry

// .pop()
// removes the last element of an array and then returns that element

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.pop());
console.log(iceCream);

>> Black Raspberry
>> [ 'Strawberry', 'Chocolate', 'Vanilla', 'Mint' ]


// .push()
// adds new values to the end of an array and returns the new length

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.push("Rocky Road"));
console.log(iceCream);

>> 6
>> [ 'Strawberry', 'Chocolate', 'Vanilla', 'Mint', 'Black Raspberry', 'Rocky Road' ]

// .slice()
// returns the selected elements in an array as a new array object. Selects elements starting at the given start argument, and ends at, but doesn't include, the given end argument. Original array doesn't change.

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.slice(2, 4));

>> [ 'Vanilla', 'Mint' ]

// .splice()
// adds/removes items to/from an arry and returns the removed item. array.splice(start, deleteCount[, item1[, item2[, ...]]])

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.splice(1, 0, "Peach"));
console.log(iceCream);

>> [ ]
>> [ 'Strawberry', 'Peach', 'Chocolate', 'Vanilla', 'Mint', 'Black Raspberry' ]

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.splice(2, 1, "Peach"));
console.log(iceCream);

>> ['Vanilla']
>> [ 'Strawberry', 'Chocolate', 'Peach', 'Mint', 'Black Raspberry' ]

// .shift()
// removes the first item of an arry and returns that item

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.shift());
console.log(iceCream);

>> Strawberry
>> [ 'Chocolate', 'Vanilla', 'Mint', 'Black Raspberry' ]


// .unshift()
// add new items to the beginning of an array and returns the new length

var iceCream = ["Strawberry", "Chocolate", "Vanilla", "Mint", "Black Raspberry"];

console.log(iceCream.unshift("Peach", "Rocky Road", "Lemon"));
console.log(iceCream);

>> 8
>> [ 'Peach', 'Rocky Road', 'Lemon', 'Strawberry', 'Chocolate','Vanilla','Mint', 'Black Raspberry' ]

// .filter()
// creates a new array with all elements that pass the test implemented by the provided function

function isTallEnough(height) {
	return height >= 50;
}

var filtered = console.log([56, 60, 40, 38, 32, 69, 70].filter(isTallEnough));

>> [ 56, 60, 69, 70 ]


// .map()
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

function plusTwo(number) {
	return number + 2;
}

var arr = [4, 10, 16, 20];

console.log(arr.map(plusTwo));

 >> [ 6, 12, 18, 22 ]
