const user ={
    username: "Reetik",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(typeof user.welcomeMessage);

console.log(this);

// function chai(){
//     let username = "Reetik"
//     console.log(this.username);
// }

// chai()      // in strict mode it will be undefined otherwise window object
 
// const chai = function (){
//     let username = "Reetik"
//     console.log(this.username);
// }
const chai = ()=> {
    let username ="Reetik"
    console.log(this) 
}

// chai()


// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "Reetik"})

console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]

// myArray.forEach()