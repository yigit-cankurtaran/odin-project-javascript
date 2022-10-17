// implementing the container div
const container = document.getElementById('container');

// adding the first (red <p>) element
const newP = document.createElement('p');
newP.setAttribute('style', 'color: red;');
newP.textContent = "Hey I'm red!";
// adding container by itself didn't work the first time, let me try again.
container.appendChild(newP);

// adding the second (blue <h3>) element
const newH = document.createElement('h3');
newH.setAttribute('style', 'color: blue;');
newH.textContent = "I'm a blue h3!";
container.appendChild(newH);

// adding the third (black border, pink background <div>) element
const newDiv = document.createElement('div');
newDiv.textContent = "Trial.";
newDiv.setAttribute('style', 'border-style: solid; border-color: black; background-color: pink;');
container.appendChild(newDiv);
