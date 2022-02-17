const toggleBtn = document.getElementById("btn");
const card = document.querySelectorAll(".card-inner");

let clickCounter = 0;

toggleBtn.addEventListener("click", () => {
  clickCounter++;

  //if button is on the right (monthly)
  if (clickCounter % 2 === 0) {
    toggleBtn.style.transform = "translate(0)";
    card.forEach((card) => {
      card.style.transform = "rotateY(0deg)";
    });

    //if button is on the left (annualy)
  } else {
    toggleBtn.style.transform = "translate(-100%)";
    card.forEach((card) => {
      card.style.transform = "rotateY(180deg)";
    });
  }
});
