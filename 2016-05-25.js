var age = {
	currentyear: 2016,
	birthyear1: 1990,
	birthyear2: 1989,

};

var possibleage1 = age.currentyear - age.birthyear1;
var possibleage2 = age.currentyear - age.birthyear2;

var either = ("They are either " + possibleage1 + " or " + possibleage2);

console.log(either);
