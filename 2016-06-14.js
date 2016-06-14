// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

function mixUp (string1, string2) {
	var sliced1 = string1.slice(0, 2);
	var sliced2 = string2.slice(0,2);
	return sliced2 + string1.slice(2) + " " + sliced1 + string2.slice(2);
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
console.log(mixUp('cat', 'meow'));

>> pox mid
>> dig donner
>> met caow
