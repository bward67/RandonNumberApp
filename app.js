const btn = document.querySelector("button");
console.log(btn);

const answer = document.querySelector(".answer");
console.log(answer);

const extra = document.querySelector(".extra");

btn.addEventListener("click", (e) => {
  e.preventDefault(); //don't forget this or the innerHTML
  //message will flash really quick and then disappear
  //this happens because it is a form so it want to submit by default
  let min = Math.ceil(document.getElementById("begin-number").value);
  let max = Math.floor(document.getElementById("end-number").value);

  random(min, max); //we create this function below
});

function random(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  answer.innerHTML = randomNumber;
  extra.classList.add("active"); // to add the bottom line
}
