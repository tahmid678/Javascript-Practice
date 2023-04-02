//while loop
// var i = 1;

// while(i <= 5){
//     console.log("Value of i: "+ i);
//     i++;
// }

// console.log("Out of the loop!");

//do while loop
// var i = 1;

// do{
//     console.log("Value of i: "+ i);
//     i++;
// }while(i <= 5);

// console.log("Out of the loop!");

// var i = 1;

// while(i<=10){
//     if(i == 4){
//         console.log("Value of i is :" + i);
//     }
//     console.log(i);
//     i++;
// }

// var i = 1;
// var sum = 0;
// var product = 1;

// while (i <= 10) {
//     sum = sum + i;
//     product = product * i;
//     i++;
// }

// console.log("Sum: " + sum);
// console.log("Product: " + product);

// console.log("End of while loop!");
// console.log("Start of for loop!");

// for (var j = 1; j <= 5; j++) {
//     console.log(j);
// }

// console.log("End of another for loop!");
// for (var k = 10; k >= 1; k--) {
//     console.log(k);
// }

//break statement

// for(var i = 1; i<=5; i++){
//     console.log(i);
//     if(i == 3){
//         break;
//     }
// }

//continue statement

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 1) {
//         continue;
//     }
//     console.log(i);
// }

var name = "I am learning Javascript!";
var food = ["Cake", "Chocolate", "Ice Cream"];
// var len = food.length;

// for (var i = 0; i < len; i++) {
//     console.log(`Index value: ${i}`);
//     console.log(food[i]);
// }
var person = {
    name: "Shakib Al Hasan",
    age: 33,
    profession: "Cricketer",
    team: "Bangladesh"
}

// for(var x in name){
//     console.log(`Index ${x} and item ${name[x]}`);
// }

// for(var x of name){
//     console.log(x);
// }

// for(var y in food){
//     console.log(`Index: ${y} and item: ${food[y]}`);
// }

// for(var y of food){
//     console.log(y);
// }

// for(var x in person){
//     console.log(`Property: ${x}
//     Value: ${person[x]}`);
// }

// for(var x of person){
//     console.log(x);
// }

var num = prompt("Enter the series length: ");
num = parseInt(num);

var sum = 0;
var str = "";

for(var i = 1; i<=num; i++){
    sum = sum + (i*i);
    str = str.concat(i*i);
    if(i!=num){
        str = str.concat("+");
    }
}

console.log(str + " = "+ sum);
