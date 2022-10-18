const list = document.createElement('li');
const first = document.createTextNode("Henloooo uwuwuwu");
const second = document.createTextNode("I'm Saul Goodman he/they!!!");
list.setAttribute("style", "color: red; border-style: solid; border-color: black;");
list.appendChild(first);
list.appendChild(second);
document.body.appendChild(list);

list.onclick(console.log("Hello World!"));
