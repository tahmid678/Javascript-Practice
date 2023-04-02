// if (false){
//     console.log("If statement executed.");
// }else{
//     console.log("Else statement is executed!");
// }

// console.log("End of if statement!");

// var age = prompt("Enter your age: ");

// if (age >=50){
//     console.log("Old");
// }else if (age < 50 && age >= 30){
//     console.log("Under 50 but above or equal 30");
// }else if (age < 30 && age >= 18){
//     console.log("Under 30 but above or equal 18");
// }else if (age < 18 && age > 0){
//     console.log("Under 18");
// }else{
//     console.log("Invalid!");
// }

// var n1 = prompt("Enter the first number: ");
// var n2 = prompt("Enter the second number: ");
// var n3 = prompt("Enter the third number: ");

// n1 = parseInt(n1);
// n2 = parseInt(n2);
// n3 = parseInt(n3);

// if(n1>=n2 && n1>=n3){
//     console.log(`${n1} is the largest number!`);
// }else if(n2>=n1 && n2>=n3){
//     console.log(`${n2} is the largest number!`);
// }
// else{
//     console.log(`${n3} is the largest number!`);
// }

// if(n1>=n2){
//     if(n1>=n3){
//         console.log(n1 + " is the largest number!");
//     }else{
//         console.log(n3 + " is the largest number!");
//     }
// }else if(n2>=n1){
//     if(n2>=n3){
//         console.log(n2 + " is the largest number!");
//     }else{
//         console.log(n3 + " is the largest number!");
//     }
// }

// console.log(`Choose an option: 
// a. Option 1
// b. Option 2
// c. Option 3`);

// var text;

// var opt = prompt("Enter an option: ");

// switch(opt){
//     case "a":
//         text = "You choose option 1";
//         break;
//     case "b":
//         text = "You choose option 2";
//         break;
//     case "c":
//         text = "You choose option 3";
//         break;
//     default:
//         text = "Invalid option!";
//         break;
// }

// console.log(text);


// var number = prompt("Enter your number: ");
// number = parseInt(number);
// var text;

// if (number < 40 && number >= 0) {
//     text = "F";
// } else if (number >= 40 && number < 45) {
//     text = "D";
// } else if (number >= 45 && number < 50) {
//     text = "C";
// } else if (number >= 50 && number < 55) {
//     text = "C+";
// } else if (number >= 55 && number < 60) {
//     text = "B-";
// } else if (number >= 60 && number < 65) {
//     text = "B";
// } else if (number >= 65 && number < 70) {
//     text = "B+";
// } else if (number >= 70 && number < 75) {
//     text = "A-";
// } else if (number >= 75 && number < 80) {
//     text = "A";
// } else if (number >= 80 && number <= 100) {
//     text = "A+";
// }else{
//     text = "Invalid Input!";
// }

// console.log(`Your grade: ${text}.`);

console.log(`Choose Operation:
1. Addition
2. Multiplication
3. Subtraction
4. Division`)

var num1 = prompt("Enter number 1: ");
var num2 = prompt("Enter number 2: ");
var operation = prompt("Enter the operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
operation = parseInt(operation);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var operationCon = isNaN(operation);

if (num1Con || num2Con || operationCon) {
    console.log("Invalid Input!");
} else {
    switch (operation) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 * num2;
            break;
        case 3:
            result = num1 - num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
    } else {
        console.log("Result: " + result);
    }
}

