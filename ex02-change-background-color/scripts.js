const colors = document.getElementsByClassName("color");

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
