// let person1 = {
//     firstName: "Tahmid",
//     lastName: "Jawad",
//     dob: "03-03-1980",

//     fullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let person2 = {
//     firstName: "Lutfar",
//     lastName: "Rahman",
//     dob: "01-01-1996",

//     fullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// console.log(person1);
// console.log(person2);

// person1.fullName();
// person2.fullName();

// console.log(person1.dob);
// console.log(person2['dob']);

// class Person {
//     constructor(fname, lname, dob){
//         this.firstName = fname,
//         this.lastName = lname,
//         this.dob = dob
//     }

//     calculateAge(){
//         let birthday = new Date(this.dob);
//         let timeElapesd = birthday.getTime();
//         let timeNow = Date.now();
//         let timeDiff = timeNow-timeElapesd;
//         let ageDate = new Date(timeDiff);
//         return Math.abs(ageDate.getUTCFullYear()-1970);
//     }

//     fullName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let person1 = new Person("Ifty", "Fysal", "01-20-1991");
// console.log(`Age of ${person1.firstName} is:` + person1.calculateAge());
// let person2 = new Person("Paulo", "Dybala", "12-09-1991");
// console.log(`Age of ${person2.firstName} is:` + person2.calculateAge());
// let person3 = new Person("Lionel", "Messi", "06-25-1987");
// console.log(`Age of ${person3.firstName} is:` + person3.calculateAge());

// console.log(person1.fullName());
// console.log(person2.fullName());
// console.log(person3.fullName());

// class Person {
//     constructor(fname, lname){
//         this.firstName = fname;
//         this.lastName = lname;
//     }

//     greeting(){
//         return `Hello ${this.firstName} ${this.lastName}!`;
//     }
// }

// class Customer extends Person {
//     constructor(fname, lname, phone, memberShip){
//         super(fname, lname);
//         this.phone = phone;
//         this.memberShip = memberShip;
//     }

//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let person1 = new Person("Lutfar", "Rahman");
// console.log(person1);
// console.log(person1.greeting());

// let customer1 = new Customer("Hasibul", "Haque", "01274394878", "123");
// console.log(customer1);
// console.log(customer1.greeting());
// console.log(customer1.fullName());

//Static Function

class Person {
    constructor(fname, lname){
        this.firstName= fname;
        this.lastName = lname;
    }

    greeting(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    static hola(){
        console.log("Hola! I am static function.");
    }
}

let person1 = new Person("Lutfar", "Rahman");
console.log(person1);
console.log(person1.greeting());
console.log(Person.hola());
//console.log(Person.greeting());
 