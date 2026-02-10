const name = "Reetik"
const repoCount = 50

console.log(name + repoCount+ " Value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('Reetikk-kc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // => String.prototype


// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,5) 
//  only works with string and array 
// it can take negative index as well 
//  if negative bothe should be negative or both should be positive
console.log(anotherString);

const newStringOne = "    Reetik    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.reetik.com/reetik%20reetik"


console.log(url.replace('%20', '-'));

console.log(url.includes('reetik'));
const ne = gameName.split('-')
console.log(ne);
