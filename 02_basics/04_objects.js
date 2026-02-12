// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Reetik"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Reetik",
            lastname: "k"
        }
    }
}

// console.log(regularUser["email"]);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        name: "Reetik"
    },
    {
        id: 2,
        name: "Reeti"
    },
    {
        id: 3,
        name: "Reet"
    }
]

// users[0].id
// console.log(users[0].id);
// console.log(users);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(tinderUser));

console.log(regularUser.hasOwnProperty('email'))


const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "Reetik"
}

// course.courseInstructor

const {courseInstructor} = course
//.         OR
const {courseInstructor : instructor} = course

console.log(courseInstructor);
console.log(instructor);



// JSON => JavaScript Object Notation looks like this
// {
//     "name": "Reetik",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {}, 
    {}
]
