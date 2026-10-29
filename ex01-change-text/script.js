/*
1. Getting the elements we are going to use.
2. Storing them
3. Creating an array to store the texts to interchange.
4. Adding event listener to the button

*/
const staticText = document.getElementById("text");
const button = document.getElementById("changeBtn");

const pool = [
  "Static Text",
  "Hello",
  "Welcome",
  "Getting started...",
  "Initiating...",
  "Loading...",
  "Please wait...",
  "Almost there",
  "One more time",
  "Great",
  "Success!",
  "Done!"
]

let currentIndex = 0; 
button.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= pool.length) {
    currentIndex = 0;
  }
  staticText.textContent = pool[currentIndex];
  staticText.style.color = 'green';
  staticText.style.fontStyle= 'bold';
});
