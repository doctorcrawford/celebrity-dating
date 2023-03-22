function hide() {
  document.querySelector("#date1").setAttribute("class", "hidden")
  document.querySelector("#date3").setAttribute("class", "hidden")
  document.querySelector("#date2").setAttribute("class", "hidden")
}

const form = document.querySelector("form");

function findLover(event) {
  event.preventDefault();
  const question1 = parseInt(document.querySelector("#selection").value);
  console.log(typeof question1);
  hide();
  
  if (question1 === 1 || question1 === 4 || question1 === 7) {
    document.querySelector("#date1").removeAttribute("class")
  } else if (question1 === 2 || question1 === 8 || question1 === 10) {
    document.querySelector("#date2").removeAttribute("class")
  } else if (question1 === 3 || question1 === 5 || question1 === 6 || question1 === 9) {
    document.querySelector("#date3").removeAttribute("class")
  }
};

function advertisement() {
  window.alert("Love potion for sale at Goats.com!")
  form.removeEventListener("submit", advertisement)
}

function spicy() {
  form.style.backgroundColor = "hotpink";
  // form.removeEventListener("mouseover", spicy);
}

form.addEventListener("submit", findLover);
form.addEventListener("submit", advertisement)
form.addEventListener("mouseover", spicy)
