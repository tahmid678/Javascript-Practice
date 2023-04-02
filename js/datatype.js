let a = 5;
let b = a;

a = 35;

console.log(b);

var numbers = [2, 4, 6];
var newNumbers = numbers;
console.log(newNumbers);
numbers[2] = 500;
console.log(numbers);
console.log(newNumbers);