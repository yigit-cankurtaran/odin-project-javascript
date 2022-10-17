console.log("Hello can anyone hear me??");
let secondTry = document.getElementsByClassName("content")[0];
// this logs the entire line including the <div> brackets
let secondTryClean = document.getElementsByClassName("content")[0].innerHTML;
// this only logs the text inside the html. INNER html.
let secondTryCleanToo = document.getElementsByClassName("content")[0].textContent;
// does the same thing.
console.log(secondTry);
console.log(secondTryClean);
console.log(secondTryCleanToo);
// let addTry = document.
// this part might come in useful
// const container = document.querySelector('#container');
// console.dir(container);

const newDiv = document.createElement('div');
// these are ways we can manipulate this new element.
// newDiv.style.color = 'blue';
// newDiv.style.cssText = 'color: blue; background: white;';
newDiv.setAttribute('style', 'color: blue; background: white;');
newDiv.setAttribute('id', 'newest-div');
newDiv.setAttribute('class', 'my-div');
let newText = document.createTextNode("This just got added.");
// didn't let me add a string by itself.
newDiv.appendChild(newText);
let anotherText = document.createTextNode("\tHello this is the 2nd addition.");
newDiv.appendChild(anotherText);
// newDiv.textContent = "This should be another way.";
// the one above replaces the entire text inside the div.
// gives an error when you do it the way I did under this line.
// document.appendChild(newDiv);
document.body.appendChild(newDiv);

const container = document.querySelector("#container");
console.log(container);
const containerText = container.innerHTML;
console.log(containerText);

const divs = document.querySelectorAll("div");
console.log(divs);
