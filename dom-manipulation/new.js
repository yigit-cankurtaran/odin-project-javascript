const container = document.getElementById('container');

// adding the first (red <p>) bullet point
const newP = document.createElement('p');
newP.setAttribute('style', 'color: red;');
newP.textContent = "Hey I'm red!";
// adding container by itself didn't work the first time, let me try again.
container.appendChild(newP);

// adding the second (blue <h3>) bullet point
const newH = document.createElement('h3');
newH.setAttribute('style', 'color: blue;');
newH.textContent = "I'm a blue h3!";
container.appendChild(newH);
