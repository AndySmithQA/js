//Objects JSON (JavaScript Object Notation)

// const student = new Object()

// student["name"] = "Dave"
// student["id"] = 1234
// student["courseCode"] = "QAJSFUND"

// //Expando property
// student.email = "Dave.smith@gmail.com"
// console.log(student);

// console.log(student["id"])


// const blogs = [
//     {title: "I love Mario", likes: 50},
//     {title: "Yoshi Sucks", likes: 20}
// ]

// console.log(blogs);

// let user = {
//     name : 'Crystal',
//     age : 30,
//     email : 'crystal@gmail.com',
//     location : 'Chicago',
//     blogs : [
//         {title: "I love Mario", likes: 50},
//         {title: "Yoshi Sucks", likes: 20},
//         {title: "Toads rule", likes: 1200}
//     ],
//     login: function(){
//         console.log("The user logged in");
//     },
//     //can be replaced by arrow function
//     logout(){
//         console.log("The user logged out")
//         console.log(this);
//     },
//     logBlogs: function(){
//         console.log(this.blogs)
//         console.log("This user has written:");
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// }

// user.logBlogs()
// user.logout()


// console.log(user);

// user.age = 32

// console.log(user.age);
// console.log(user["age"]);

// const key = "age"
// console.log(user[key]);

// console.log(typeof user);

// let classroom = [
//     {name: "dave", id: 1234, code:"QAFSFUND"},
//     {name: "will", id: 2345, code:"QAFSFUND"},
// ]
// console.log(classroom);


//merging Objects

// let obj1 = {
//     a: 1
// }

// let obj2 = {
//     b:2
// }

// let obj3 = {
//     c:3
// }


// Object.assign(obj1,obj2,obj3)
// console.log(obj1);
// console.dir(obj1);


//Deconstructing Array

// let first,second, third, fourth
// let words = ["I", "Love", "JavaScript"]
// console.log(words);
// [first,second, third, fourth] = words

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

// first = "You"
// console.log(first);
// console.log(words);
//Deconstruct Objects


let myObj = {first: "Salt", second: "Pepper"}

let {first, second} = myObj

console.log(first);




















