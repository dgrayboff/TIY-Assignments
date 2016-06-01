
function pluralize(number, noun) {
	if (number > 1 && noun !== "sheep") {
		return number + " " + noun + "s";
	}
	else {
		return number + " " + noun;
	}

}

console.log(pluralize(2, "dog"));
console.log(pluralize(1, "cat"));
console.log(pluralize(4, "parrot"));
console.log(pluralize(2, "sheep"));

>> 2 dogs
>> 1 cat
>> 4 parrots
>> 2 sheep
