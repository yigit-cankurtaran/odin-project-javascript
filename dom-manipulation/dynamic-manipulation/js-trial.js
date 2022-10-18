const list = document.createElement('li');
const first = document.createTextNode("first thing");
const second = document.createTextNode("\nsecond thing");
// doesn't create a new line element for some reason.
list.setAttribute("style", "color: red; border-style: solid; border-color: black;");
list.appendChild(first);
list.appendChild(second);
document.body.appendChild(list);

list.addEventListener("click", console.log("pog!"));
// this creates the effect we want at the start and never again.

// going to try out a button now.
const btn = document.createElement('button');
btn.textContent = "Would you kindly click me?";
document.body.appendChild(btn);
// created the button.
btn.onclick = () => document.body.setAttribute("style", "background-color: black");
btn.onclick = () => alert("Hello World!");
// it does whatever the last onclick element says.
// because it manipulates the html of the button element itself, doesn't add a new function to the code.
