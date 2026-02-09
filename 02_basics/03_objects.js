// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Reetik",
    "full name": "Reetik k",
    [mySym]: "myKey1",
    age: 25,
    location: "India",
    email: "reetik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "reetik@amazon.com"
// Object.freeze(JsUser)
JsUser.email = "reetik@microsoft.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
