const btn = document.createElement('button');
btn.textContent = "hi!";
btn.setAttribute('id', 'hi-button');
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  console.log("Hello World!");
  alert("Hey! Check the console.");
  // if (document.body.style.backgroundColor == "white"){
  //   document.body.setAttribute('style', 'background-color = black');
  // } else {
  //   document.body.setAttribute('style', 'background-color = white');
  // }
  // never works with the if-else statement
  document.body.style.backgroundColor == "white" ? document.body.setAttribute("style", "background-color: black") : document.body.setAttribute("style", "background-color: white");
  // and this doesn't work the first time you click it. i wonder why.
});
