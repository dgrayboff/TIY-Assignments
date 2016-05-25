var age = {
	currentyear: 2016,
	birthyear: 1990,

};

var possibleage = age.currentyear - age.birthyear;

var either = ("They are either " + possibleage + " or " + (possibleage - 1));

console.log(either);

>> They are either 26 or 25
