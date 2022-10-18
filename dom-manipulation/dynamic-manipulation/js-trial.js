const list = document.createElement('li');
const first = document.createTextNode("first thing");
const second = document.createTextNode("second thing");
list.setAttribute("style", "color: red; border-style: solid; border-color: black;");
list.appendChild(first);
list.appendChild(second);
document.body.appendChild(list);

list.addEventListener("click", console.log("pog!"));
