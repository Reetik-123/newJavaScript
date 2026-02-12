function sayMyName(){
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("T");
    console.log("I");
    console.log("K");
}

// sayMyName()

// function addTwoNumber(num1,num2){
//     return num1+num2
// }
// console.log(addTwoNumber(3,4))

function addTwoNumber(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}
const result = addTwoNumber(3,4);
// console.log(result);

function loginUserMessage(username= "Sam"){
    if(!username){
        console.log("Please enter a valid username")
        return
    }
    return `${username} ,just logged in`
}
// console.log(loginUserMessage("Reetik"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Reetik",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject((user))
handleObject({
    username: "Sam",
    prices: 200
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,30,400,400]))