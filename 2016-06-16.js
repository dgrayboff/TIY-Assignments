// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.



function verbing (string1) {

	if (string1.includes('ing') === true) {
		return string1 + "ly";
	}

	if (string1.length >= 3) {
		var a = string1.slice(-1);
		return string1 + a + "ing";
	}


	else {
		return string1;
	}
}

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));
console.log(verbing('run'));

>> swimming
>> swimmingly
>> go
>> running
