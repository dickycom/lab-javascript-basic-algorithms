// Iteration 1: Names and Input
let hacker1 = 'Driver';
let hacker2 = 'drivers';
console.log(
	`The driver's name is ${hacker1} \nThe navigator's name is ${hacker2}`
);

// Iteration 2: Conditionals
function longestName(name1, name2) {
	if (name1.length > name2.length) {
		console.log(
			`The driver has the longest name, it has ${name1.length} characters.`
		);
		return name1.length;
	} else if (name2.length > name1.length) {
		console.log(
			`It seems that the navigator has the longest name, it has ${name2} characters.`
		);
		return name2.length;
	}

	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	);
	return hacker1.length;
}
longestName(hacker1, hacker2);
// Iteration 3: Loops

// 3.1
function nameLetter(name) {
	let newName = name.split('');
	console.log(newName);
	return newName;
}
nameLetter(hacker1);

// 3.2

function reverseName(name) {
	let nameArr = nameLetter(name);
	nameArr = nameArr.reverse().join('');
	console.log(nameArr);
}

reverseName(hacker2);
// 3.3
function lexo(name1, name2) {
	const nameArr1 = nameLetter(name1.toLowerCase());
	const nameArr2 = nameLetter(name2.toLowerCase());
	const longest = longestName(name1, name2);
	for (let x = 0; x < longest; x++) {
		if (nameArr1[x] < nameArr2[x]) {
			return console.log(`The driver's name goes first.`);
		} else if (nameArr2[x] < nameArr1[x]) {
			return console.log(`Yo, the navigator goes first definitely.`);
		}
	}
	if (nameArr1.length < nameArr2.length) {
		return console.log(`The driver's name goes first.`);
	} else if (nameArr2.length < nameArr1.length) {
		return console.log(`Yo, the navigator goes first definitely.`);
	}
	return console.log(`What?! You both have the same name?`);
}
lexo(hacker1, hacker2);
