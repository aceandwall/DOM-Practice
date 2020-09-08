// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the div with createElement,
// append the <h1> and <p> to it before adding it to the container.

const container = document.querySelector("#container");

// creating the red p element
const heyRed = document.createElement("p");
heyRed.textContent = "Hey I'm red";
heyRed.style.color = "red";

container.appendChild(heyRed);

// creating the blue h3 element
const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";

container.appendChild(blueText);

// pink box element

const pinkBox = document.createElement("div");
pinkBox.style.backgroundColor = "pink";
pinkBox.classList.add("pink-box");
pinkBox.style.borderColor = "black";
pinkBox.style.borderWidth = "thick";

// h1 inside pink-box
const pinkBoxTitle = document.createElement("h1");
pinkBoxTitle.textContent = "I'm in a div";

pinkBox.appendChild(pinkBoxTitle);

//p inside the pink-box
const pinkBoxPara = document.createElement("p");
pinkBoxPara.textContent = "ME TOO!";

pinkBox.appendChild(pinkBoxPara);

container.appendChild(pinkBox);
