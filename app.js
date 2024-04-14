const btn = document.querySelector("button");
const answer = document.querySelector(".answer");
const extra = document.querySelector(".extra");
const resetBtn = extra.nextElementSibling;
const beginNum = document.getElementById("begin-number");
const endNum = document.getElementById("end-number");

btn.addEventListener("click", (e) => {
  e.preventDefault(); //don't forget this or the innerHTML
  //message will flash really quick and then disappear
  //this happens b/c it is a form so it wants to submit by default
  let min = Math.ceil(beginNum.value);
  let max = Math.floor(endNum.value);

  random(min, max); //we create this function below
});

function random(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  answer.innerHTML = randomNumber;
  extra.classList.add("active"); // to add the bottom line
}

resetBtn.addEventListener("click", () => {
  beginNum.value = "";
  endNum.value = "";
  answer.innerHTML = "0";
});
