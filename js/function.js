//Execution of Function
// saySomething();

// Declaration of function
// function saySomething(){
//     console.log("Hello!");
//     console.log("I am learning Javascript");
//     console.log("Bohubrihi");
// }

// function saySomething(fname = "Ifty", lname="Sandik"){
//     console.log(`Hello ${fname} ${lname}!`);
// }

// let firstName = "Tahmid";
// let lastName = "Jawad";
// saySomething(firstName, lastName);

// function addNUm(a = 0, b = 0) {
//     console.log(`${a} + ${b} = ${a+b}`);
//     alert("Not executable.")
//     return a+b;
// }

// console.log(addNUm(4, 5));
// alert(addNUm(4.9));

//Function declaration in normal way

// function saySomething(name){
//     console.log("Hello "+name+"!");
// }

// //Function declaration in expression way
// let saySomething1 = function(name){
//     console.log("Hello "+name+" Again!");
// }

// saySomething("Bohubrihi");
// saySomething1("Tahmid");

//Arrow Function (ES6)

// let saySomething3 = name =>{
//     console.log("I am "+name);
// }

// saySomething3("Javascript!");

//Array iteration using function

// var foods = ["Cake", "Biscuits", "Chocolate", "Bread"];
// var numbers = [1, 43, 36, 99];

// let printEverything = function (item, index, array) {
//     console.log(`Index: ${index} Item: ${item}
// Array: ${array}`);
// }

// //foods.forEach(printEverything);

// //Array iteration using map function
// function modify(item) {
//     return `${item} is a food item.`;
// }

// var modifiedFood = foods.map(modify);
// console.log(modifiedFood);

// var squaredNumbers = numbers.map(function (item) {
//     return item * item;
// })

// console.log(squaredNumbers);

// let person = {
//     firstName: "Tahmid",
//     lastName: "Jawad",
//     dob: "01-01-1998",
//     fullName: function fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }

// }

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName());

// let str = "Tahmid";
// console.log(str);
// console.log(str.split(""));
// console.log(str.slice(1,3));

//Math object 

// let val;

// val = Math.PI;
// val = Math.E;
// val = Math.round(3.6);
// val = Math.ceil(4.6);
// val = Math.floor(4.9);
// val = Math.sqrt(81);
// val = Math.abs(-88);
// val = Math.min(-5, -9, 0, 3);
// val = Math.max(-5, 11, 33, 54);
// val = parseInt(Math.random()*100);
// console.log(val);

//Date Object

// let val;

// let today = new Date();
// val = today;

// val = val.toString();

// let birthday = new Date("02-01-1998 02:37:34");
// birthday = new Date("February 01 1998");
// birthday = new Date("02/01/1998");
// val = birthday;

// val = today.getMonth();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getDate();
// val = today.getHours();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(0);
// birthday.setDate(24);
// birthday.setFullYear(2000);
// birthday.setHours(13);
// birthday.setMinutes(56);
// birthday.setSeconds(33);
// birthday.setMilliseconds(333);

// val = birthday;

// console.log(val);

// var a = 7;
// a = a + 9;

// let b = 8;
// b = b + 0;

// const c = 8;
// c = 9;

//Global Scope 
var a = 4;
let b = 9;
const c = 5;

console.log(`Global Scope: `, a, b, c);

//Local Scope
function test(){
    var a = 5;
    let b = 3;
    const c = 2;

    console.log(`Function Scope: `, a, b, c);
}

test();

console.log(`Global Scope: `, a, b, c);

if(true){
    var a = 9;
    let b = 7;
    const c = 4;
    console.log(`If Scope: `, a, b, c);
}

console.log(`Global Scope: `, a, b, c);

for(let a = 0; a<10; a++){
    console.log(a);
}

console.log(`Global Scope: `, a, b, c);