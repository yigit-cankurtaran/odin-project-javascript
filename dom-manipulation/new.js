// writing in the container element.
const container = document.querySelector('#container');


// adding the first (red <p>) bullet point
const newP = document.createElement('p');
newP.setAttribute('style', 'color: red;');
newP.textContent = "Hey I'm red!";
document.body.appendChild(newP);

// adding the second (blue <h3>) bullet point
const newH = document.createElement('h3');
newH.setAttribute('style', 'color: blue;');
newH.textContent = "I'm a blue h3!";
document.body.appendChild(newH);
