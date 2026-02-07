// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456789012345678901234567890n



// Reference (Non-primitive)

// Object, Array, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Reetik",
    age: 20,
} 

const muFunction = function(){
    console.log("Hello World")
}

console.log(typeof outsideTemp); 

// ****************************************************************

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "Reetikdotcom"

let anotherName = myYoutubename 
anotherName = "Reetik"

let userOne = {
    email : "reetik@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "reetik2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
