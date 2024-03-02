const btn = document.querySelector("button");
console.log(btn);

const answer = document.querySelector(".answer");
console.log(answer);

const extra = document.querySelector(".extra");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let min = Math.ceil(document.getElementById("begin-number").value);
  let max = Math.floor(document.getElementById("end-number").value);

  random(min, max);
});

function random(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  answer.innerHTML = randomNumber;
  extra.classList.add("active");
}
