/*Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars' except it will add '(pinky)' at the end if the amount is 1 million. For example:

Dr Evil(10): 10 dollars
Dr Evil(1000000): 1000000 dollars (pinky)*/

function DrEvil(amount) {
	if (amount != 1000000) {
	return amount + " dollars";
	} else {
		return amount + " dollars" + " (pinky)";
	}
}

console.log(DrEvil(10));
console.log(DrEvil(1000000));
console.log(DrEvil(1000001));

>> 10 dollars
>> 1000000 dollars (pinky)
>> 1000001 dollars
