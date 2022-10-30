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
btn.onclick = () => document.body.setAttribute("style", "background-color: black; color: white;");
btn.onclick = () => alert("anan");
// it does whatever the setAttribute element says.
// because it manipulates the html of the button element itself, doesn't add a new function to the code.
btn.onclick = () => document.body.style.backgroundColor == "white" ? document.body.setAttribute("style", "background-color: black") : document.body.setAttribute("style", "background-color: white");
// this is how i could implement a dark mode.
const newBtn = document.createElement('button');
newBtn.textContent = "Click me not the one next to me";
document.body.appendChild(newBtn);
newBtn.addEventListener('click', () => {
  alert("Hello World!");
  console.log("I should be able to do multiple things, let's see.");
});
// this is a better way to do it all
// you can do multiple things without one overriding the other.
