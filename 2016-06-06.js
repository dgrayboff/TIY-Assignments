var myChoices = ["cycling", "reading", "sleeping", "eating"];

function myFunction(number, hobby) {
	 return "My #" + number + " choice is " + myChoices[hobby];
}

console.log(myFunction(1,2));
console.log(myFunction(2,1));
console.log(myFunction(3,3));
console.log(myFunction(4,0));

>> My #1 choice is sleeping
>> My #2 choice is reading
>> My #3 choice is eating
>> My #4 choice is cycling
