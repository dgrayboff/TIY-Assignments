/*var lang = {
	en: "Hello, world",
    es: "Hola Mundo",
    de: "Hallo Welt"
}

function helloWorld(lang) {
	 for (var i = 0; i < lang.length; i++) {
	 	return "Hello, World";
	 }

}*/

function helloWorld(lang) {
	 if (lang === 'fr') {
	 	return 'Bonjour tout le monde';
	 }

	 else if (lang === 'es') {
	 	return 'Hola, Mundo';
	 }

	 else {
	 	return 'Hello, World';
	 }

}

console.log(helloWorld('es'));
console.log(helloWorld('fr'));
console.log(helloWorld('en'));
