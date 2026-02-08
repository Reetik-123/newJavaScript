// array

const myArr = [0,1,2,3,4,5]    
const myHeros = ['spiderman', 'ironman', 'thor', 'hulk']

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

// Array Methods 

//myArr.push(6) // adds to the end of the array
//myArr.pop() // removes the last element of the array
//myArr.unshift(-1) // adds to the beginning of the array
//myArr.shift() // removes the first element of the array

// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() 
// console.log( myArr);
// console.log(typeof myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);
