//JavaScript can change the HTML contents of a web page.
//getElementById() is one of many JavaScript methods to change the content of web page.

// document.getElementById("demo").innerHTML = "Hello JavaScript!";
// document.getElementById('demo').innerHTML = "I am learning JavaScript!";

// //JavaScript can change the attribute value of a HTML element.

// document.getElementById('changeAttribute').src = "/images/bulbon.jpg";
// document.getElementById('changeAttribute').src = "/images/bulboff.jpg";

// //Below code changes the CSS attribute of a tag.
// document.getElementById("hola").style.fontSize = '40px';
// document.getElementById("hola").style.fontFamily = 'Courier';
// document.getElementById("hola").style.color = "yellow";

// let val;

// val = this;
// val = window;
// val = window.document;
// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;
// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute('src');

// link = document.links;
// let linkArray = Array.from(link);

// linkArray.forEach(function(link){
//     console.log(link.getAttribute('src'));
// })


//documetnt.getElementById()
// let val;

// val = document.getElementById('document-title');
// val = document.getElementById('document-title').id;
// val = document.getElementById('document-title').className;
// val = document.getElementById('document-title').classList;

// document.getElementById('document-title').style.backgroundColor='#333';
// document.getElementById('document-title').style.color= '#fff';
// document.getElementById('document-title').style.display = 'block';
// document.getElementById('document-title').style.padding = '10px';
// //document.getElementById('document-title').style.display ='none';

// document.getElementById('document-title').textContent = "Changed By JavaScript";
// document.getElementById('document-title').innerText = "Again changed by JS";
// document.getElementById('document-title').innerHTML = "Hello JavaScript!";

// document.getElementById('document-title').innerText = "<i> Hello JavaScript!</i>";
// document.getElementById('document-title').innerHTML = "<i> Hello JavaScript!</i>";

// val = document.getElementById('document-title');
// val.innerText = 'Hello Hello!';

// val = document.querySelector('#document-title');
// val = document.querySelector('.title-document');
// val = document.querySelector('.another-class');
// val = document.querySelector('h3');
// val = document.querySelector('ol');
// val = document.querySelector('ol li');

// val.style.backgroundColor='red';
// val.style.color='white';

// val = document.querySelector('li:last-child');
// val = document.querySelector('li:nth-child(3)');
// document.querySelector('li:nth-child(even)').innerText="Hello";
// document.querySelector('li:nth-child(odd)').innerText='Hola!';

// console.log(val);

// let list = document.getElementsByClassName('sample-class');
// list[0].style.background = 'green';
// list[0].style.color = 'white';
// list[0].style.padding = '10px';
// list[0].textContent = 'Hello World!';

// list = document.getElementsByTagName('li');
// list = document.querySelector('ol').getElementsByTagName('li');

// let listArray = Array.from(list);
// listArray.forEach(function(item){
//     //console.log(item);
// });

// list = document.querySelectorAll('.sample-class');
// list = document.querySelectorAll('#document-title');
// list = document.querySelectorAll('ol li');

// // list.forEach(function(item){
// //     console.log(item);
// // });

// listOdd = document.querySelectorAll('li:nth-child(odd)');
// listEven = document.querySelectorAll('li:nth-child(even)');

// listOdd.forEach(function(item){
//     item.style.background = 'grey';
//     item.style.color = 'white';
// });

// listEven.forEach(function(item){
//     item.style.background = 'red';
//     item.style.color = 'white';
// });
// console.log(list);

// let val;

// let list = document.querySelector('ul');
// let listItem = document.querySelector('ul li:first-child');
// val = list;
// val = listItem;

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[1].nodeType;
// val = list.childNodes[2];
// val = list.childNodes[2].nodeName;
// val = list.childNodes[2].nodeName;
// val = list.childNodes[2].nodeType;

// val = list.children;
// val = list.children[0];
// list.children[0].textContent="Doodle";

// val = list.children[1].children[0];
// val = list.children[1].children[0].href;

// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastChild;
// val = list.lastElementChild;
// val = list.children[3].children[0].href;

// val = list.childElementCount;

// val = listItem;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// listItem =document.querySelector('ul li:last-child');
// val = listItem;
// val = listItem.previousElementSibling.previousElementSibling;


// console.log(val);

// let olItem = document.createElement('li');
// olItem.className='a new another-class';
// olItem.id = 'new-element';
// olItem.setAttribute('title', 'A title to a new element');

// olItem.appendChild(document.createTextNode('PHP'));
// document.querySelector('ol').appendChild(olItem);
// olItem.setAttribute('style', 'color: red');

// let ulItem = document.createElement('li');
// let linkItem = document.createElement('a');

// linkItem.appendChild(document.createTextNode('Instagram'));
// linkItem.setAttribute('href', 'https://www.instagram.com');
// ulItem.appendChild(linkItem);
// document.querySelector('ul').appendChild(ulItem);

// console.log(ulItem);
// console.log(linkItem);


//Replacing Element

// let newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode('New Heading'));
// newHeading.className = 'sample-class';
// newHeading.id = 'document-title';

// let oldHeading = document.querySelector('h3');
// let parent = oldHeading.parentElement;

// parent.replaceChild(newHeading, oldHeading);


// console.log(newHeading);
// console.log(oldHeading);
// console.log(parent);

//Removing Element

// let listItems = document.querySelectorAll('li');
// let list = document.querySelector('ul');

// // listItems[0].remove();
// // listItems[5].remove();

// list.removeChild(listItems[5]);
// list.classList.add('New');
// list.classList.add('AgainNew');

// list.classList.remove('AgainNew');
// list.classList.remove('New');

// let val = list.hasAttribute('class');
// val = list.hasAttribute('title');
// list.setAttribute('title', 'A Title');
// val = list.hasAttribute('title');
// list.removeAttribute('title');
// val = list.hasAttribute('title');
// console.log(val);


// console.log(listItems);
// console.log(list);

// let val = document.querySelector('#input');

// val.addEventListener('focus', message);
// // document.querySelector('.container').style.background='green';
// // console.log(btn);

// document.querySelector('#input').addEventListener('keyup', what);

// function message(e){
//     this.style.background = 'green';
//     console.log('focused!');
// }

// function what(e){
//     //console.log(this.value);
//     document.querySelector('#demo').innerText = this.value;
// }

//Error Handling

// console.log("Before Error!");


// let a = 2;

// try{
//     if(a>15) throw "Too Big!";
//     else if(a<5) throw "Too Small!";
// }catch(err){
//     console.log(err);
// }

// console.log("After Error!");

// let re;

// re = /hello/;
// re = /Hello/;
// re = /hello/i;
// re = /jawad/;
// re = /world/;
// re = /jawad/;
// re = /world/;

// console.log(re.source);

// let str = 'Hello World!';
// str = 'Again Hello World!';
// str = 'Tahmid Hello World!';
// str = 'tahmidjawadhello';
// str = 'hell world';
// str = 'hello world hello world'

// let result = re.exec(str);
// result = re.test(str);
// result = str.match(re);
// result = str.search(re);


// str = 'Tahmid An-Noor An-Noor';
// re = /An-Noor/;

// result = str.replace(re, "Jawad");



// console.log(str);
// console.log(re.source);
// console.log(result);


// let re;
// let str;

// //Literal character
// re = /hello/;
// re = /hello/i;

// //meta character
// re = /^hello/; //must start with
// re = /hello$/; //must end with
// re = /^hello$/; //must start and end with
// re = /^h.llo$/; //matches any character in place of dot
// re = /h*llo/;
// re = /he?a?llo/; //optional
// re = /hello\?/;

// //character set using brackets []
// re = /h[ea]llo/; //must be one of them inside the brackets
// re = /[HA]ello/i;
// re = /[^ha]ello/; // anything except those inside the brackets
// re = /^[ha]ello/; // must start with h or a
// re = /[a-z]ello/; // anything within the range of a to z
// re = /^[A-Z]/; //first letter must start with capital letter
// re = /^[a-z]/; //first letter must start with lower letter
// re = /^[A-Za-z]ello/ // first letter must be from english alphabet be it capital or lower case does not matter
// re = /[0-9]ello/;
// re = /^[0-9]ello/; // pattern must start with a digit and the pattern itself must be in starting place.
// re = /[^0-9]ello/; // pattern must start without a digit and the patten itself can be in any place.
// re = /[0-9][0-9]ello/; //first two letters must contains digits

// //Braces - Quantifier

// re = /hel{2}o/; //must occur l 2 times
// re = /hel{3}o/; //must occur l 3 times
// re = /hel{2,5}o/; //must occur l 2, 3, 4 or 5 times
// re = /hel{2,}o/; //at least 2 l

// //Parentheses () Grouping

// re = /^([0-9]){3}/; // at least contain three digits in the begining 

// //Bangladeshi phone number
// re = /^01[0-9]{9}/;
// re = /^\+8801[0-9]{9}/;
// re = /^([0-9]xy){3}/;

// //Shorthand Character - alpha numeric or _
// re = /\w/;

// str = "hello";
// str = "heallo";
// str = "hello";
// str = "aello";
// str = "hello";
// str = " ello";
// str = "tello";
// str = "aello";
// str = 'Aello';
// str = "Tahmid";
// str = "tahmid";
// str = "tello";
// str = " ello is in first place";
// str = "this pattern ello matches";
// str = "323ello";
// str = "hello";
// str = "helllo";
// str = "hello";
// str = 'helllo';
// str = "hellllo";
// str = "helllllo";
// str = "hellllllo";
// str = "hellllllllllllllo";
// str = "1234ello";
// str = "+8801876777777";
// str = "2xy3xy5xy";
// str = "+#$hfdfkj";


// console.log(re.exec(str));

// function reTest(re, str){
//     if(re.test(str)){
//         console.log(`${str} matches ${re.source}`);
//     }else{
//         console.log(`${str} does not match ${re.source}`);
//     }
// }

// reTest(re, str);


//Examples

// let re;
// let str;

// //Postal code
// re = /^[0-9]{4}$/;

// str = "16000";

// //Phone Number
// // 01713544353 +8801242344345 8801234433554

// re = /^01[0-9]{9}$/;
// re = /^\+8801[0-9]{9}$/;
// re = /^(\+88)?01[0-9]{9}$/;
// re = /^(\+)?(88)?01[0-9]{9}$/;

// //Email id validation bohubrihi9.learn@edu.com.bd

// re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

// str = "01713544353";
// str = "01242344345";
// str = "bohubrihi9.learn@edu.com.bd";

// console.log(re.test(str));

//JSON

// let student = {
//     name : "Tahmid",
//     age : 25,
//     hometown : "Narsingdi"
// };

// console.log(student);

// // let student_json = {
// //     "name": "Tahmid",
// //     "age": "34",
// //     "hometown": "Narsingdi"
// // }

// let student_json = JSON.stringify(student);

// console.log(student_json);

// let student_new = JSON.parse(student_json);

// console.log(student_new);

// let person = {
//     name : "Tahmid",
//     age : 25,
//     hometown: "Narsingdi",
//     married: false,
//     dob: "1988-02-24",
//     test_null: null,
//     test_undefined: undefined,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// };

// console.log(person);

// let person_new = JSON.stringify(person);

// console.log(person_new);

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         var data = this.responseText;
//         //console.log(data);
//         jsonData(data);
//     }
// };
// xmlhttp.open("GET", "data.json", true);
// xmlhttp.send();


// function jsonData(json_obj){
//     console.log(json_obj);
//     var newData = JSON.parse(json_obj);
//     //console.log(newData);
//     for(x in newData.person){
//         var persons = newData.person;
//         for(y in persons[x]){
//             console.log(persons[x][y]);
//         }

//     }
//     // console.log(persons[x]);
// }



//AJAX 

// document.getElementById("get_data").addEventListener("click", onLoad);

// function onLoad(){
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.txt", true);

//     // xhr.onprogress = function(){
//     //     console.log(this.readyState);
//     // }

//     // xhr.onreadystatechange = function(){
//     //     //console.log(this.readyState);
//     //     if(this.status == 200 && this.readyState == 4){
//     //         console.log(this.responseText);
//     //     }
//     // }
//     xhr.onload = function(){
//         if(this.status == 200){
//             //console.log(this.status);
//             //console.log(this.responseText);
//             document.getElementById("output").innerHTML = `<h2>${this.responseText}</h2>`;
//         }
//     }
//     xhr.send();
//     console.log(xhr); 
// }

// document.getElementById("get_data").addEventListener("click", loadJokes);

// function loadJokes(){
//     let xhr = new XMLHttpRequest();
//     var limit = document.getElementById("jokesNumber").value;
//     xhr.open("GET", `https://api.api-ninjas.com/v1/jokes`, true);

//     xhr.onload = function(){
//         console.log(limit);
//         if(this.status == 200){
//             let jokes = JSON.parse(this.responseText);
//             console.log(jokes);
//             //document.getElementById("output").innerHTML = `<h4> ${jokes.value} </h4>`;
//         }
//     }
//     xhr.send();
// }

// setTimeout(function(){
//     console.log("Hello World!");
// }, 5000);

// let persons = [
//     {firstName: "Tahmid", lastName: "Jawad"},
//     {firstName: "Iftisam", lastName: "Sandik"}
// ]

// function createPerson(person){
//     let pro = new Promise(function(resolve, reject){
//         persons.push(person);
//         let error = true;
//         if(!error){
//             resolve();
//         }else{
//             reject("Error: Something Wrong!");
//         }
//     })

//     return pro;
// }


// function getPerson() {
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(item){
//             output += `<li> ${item.firstName} ${item.lastName} </li>`
//         });
//         document.getElementById('output').innerHTML = output;
//     }, 500);
// }

// createPerson({firstName: "Ifty", lastName: "Sakib"}).then(getPerson).catch(function(error){
//     console.log(error);
// });

//Fetch API

// document.getElementById("get_data").addEventListener("click", getData);

// function getData(){
//     fetch('http://api.icndb.com/jokes/random')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(data){
//             console.log(data);
//         })
// }


//Define UI elements

// let form = document.querySelector("#tasks_form");
// let taskList = document.querySelector('ul');
// let clearBtn = document.querySelector("#clear_tasks_btn");
// let filter = document.querySelector("#filter_tasks");
// let inputTask = document.querySelector("#new_task");


// //Define event listeners...
// form.addEventListener("submit", addTask);
// taskList.addEventListener("click", removeTask);
// clearBtn.addEventListener("click", clearTask);
// filter.addEventListener("keyup", filterTasks);
// document.addEventListener("DOMContentLoaded", getTasks);


// //Define functions for event listeners...

// function addTask(e) {
//     if (inputTask.value === "") {
//         alert("Add a task!");
//     } else {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(inputTask.value + " "));
//         let link = document.createElement('a');
//         link.setAttribute("href", "#");
//         link.innerHTML = "x";
//         li.appendChild(link);
//         taskList.appendChild(li);
//         storeDataInLocalStorage(inputTask.value);
//         inputTask.value = "";
//     }
//     e.preventDefault();
// }

// function removeTask(e) {
//     if (e.target.hasAttribute("href")) {
//         if (confirm("Are you sure?")) {
//             let ele = e.target.parentElement;
//             ele.remove();
//             removeFromLS(ele);
//         }
//     }
// }

// function clearTask(e) {
//     //taskList.innerHTML = "";
//     while (taskList.firstChild) {
//         taskList.removeChild(taskList.firstChild);
//     }

//     localStorage.clear();
// }

// function filterTasks(e) {
//     let text = e.target.value.toLowerCase();
//     document.querySelectorAll("li").forEach(tasks => {
//         let item = tasks.firstChild.textContent;
//         if (item.toLocaleLowerCase().indexOf(text) != -1) {
//             tasks.style.display = "block";
//         } else {
//             tasks.style.display = "none";
//         }
//     })
// }

// function storeDataInLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem("tasks") == null){
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }
//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

// }

// function getTasks(){
//     let tasks;
//     if(localStorage.getItem("tasks") == null){
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     tasks.forEach(task => {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(task + " "));
//         let link = document.createElement('a');
//         link.setAttribute("href", "#");
//         link.innerHTML = "x";
//         li.appendChild(link);
//         taskList.appendChild(li);
//     })

// }

// function removeFromLS(taskItem){
//     let tasks;
//     if(localStorage.getItem("tasks")==null){
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     let li = taskItem;
//     li.removeChild(li.lastChild);

//     tasks.forEach((task, index) =>{
//         if(li.textContent.trim() == task){
//             tasks.splice(index, 1);
//         }
//     });

//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


//Get the UI elements from DOM

let form = document.querySelector("#add_book");
let bookList = document.querySelector("#book_list");


//Define Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Define UI Class
class UI {
    static addToBookList(book) {
        let list = document.querySelector("#book_list");
        let row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">X</a></td>`;

        list.appendChild(row);


    }
    static clearFields() {
        document.querySelector("#book_title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    static showAlert(message, className) {
        let div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        let form = document.querySelector("#add_book");
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }

    static deleteFromBook(target) {
        if (target.hasAttribute("href")) {
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
            UI.showAlert("Book Removed!", "success");
        }
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks() {
        let books = Store.getBooks();
        books.forEach(book => {
            UI.addToBookList(book);
        });
    }

    static removeBook(isbn){
        let books = Store.getBooks();
        books.forEach((book, index)=>{
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }
}


//Add event listeners
form.addEventListener("submit", newBook);
bookList.addEventListener("click", removeBook);
document.addEventListener("DOMContentLoaded", Store.displayBooks());


//Define functions
function newBook(e) {
    let title = document.querySelector("#book_title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill all the fields!", "error");
    } else {
        let book = new Book(title, author, isbn);
        UI.addToBookList(book);
        UI.showAlert("Book Added!", "success");
        UI.clearFields();
        Store.addBook(book);
    }

    e.preventDefault();
}

function removeBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}
