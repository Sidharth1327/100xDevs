const x: number =1;  // we specify the type as "number" here
console.log(x);

/* // Hello World - arguements in function
function greet(firstname: string){
  console.log("Hello" + firstname);
}

greet("sidhu");


// Sum - return type in TS functions
// explicitly defining what will be the return type of the function
function sum(a:number, b:number): number {
  return a+b;
}
const value = sum(3,6);
console.log(value);

//Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");tsc -b

}) */


// ----->>>>  Arrays in TS  <<<<<<<<-------//
/* If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type */
/* Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ])); */