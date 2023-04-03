//JavaScript can change the HTML contents of a web page.
//getElementById() is one of many JavaScript methods to change the content of web page.

document.getElementById("demo").innerHTML = "Hello JavaScript!";
document.getElementById('demo').innerHTML = "I am learning JavaScript!";

//JavaScript can change the attribute value of a HTML element.

document.getElementById('changeAttribute').src = "/images/bulbon.jpg";
document.getElementById('changeAttribute').src = "/images/bulboff.jpg";

//Below code changes the CSS attribute of a tag.
document.getElementById("hola").style.fontSize = '40px';
document.getElementById("hola").style.fontFamily = 'Courier';
document.getElementById("hola").style.color = "yellow";
