//------------- déclaration de variables
const Form = document.getElementById("form");
const choiceInput = document.getElementById("choice");
const alertZone = document.getElementById("alertZone");
const choosedvalue = document.getElementById("choosedvalue");
const message = document.getElementById("message");
const choosedFalsevalue = document.getElementById("choosedFalsevalue");
const resultFalse = document.getElementById("resultFalse");
const resultTrue = document.getElementById("resultTrue");
var nombreMystere;
var chanceLeft = document.getElementById("chanceLeft");

//------ initialisation
document.addEventListener("DOMContentLoaded", createNumber);
alertZone.style.display = "none";
//------------- function generateur
function createNumber() {
  nombreMystere = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  console.log(nombreMystere);
}

var setChances = 10;
var tentatives = 0;
chanceLeft.textContent = setChances;

// Fonction pour afficher le modal avec un modal if succes/fail
function afficherModal(tentatives, nombreMystere) {
  // Modifier le contenu dynamique
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = `Bravo ! Tu as trouvé le nombre ${nombreMystere} en ${
    tentatives + 1
  } tentatives.`;

  // Activer le modal avec Bootstrap
  const modal = new bootstrap.Modal(document.getElementById("Modal"));
  modal.show();
}
function afficherModalFail() {
  // Modifier le contenu dynamique
  const label = document.getElementById("modalLabel");
  label.textContent = `Dommage 🥲`;
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = `Dommage vous avez atteint la limite de tentatives.`;

  // Activer le modal avec Bootstrap
  const modal = new bootstrap.Modal(document.getElementById("Modal"));
  modal.show();
}
//------------- programme
Form?.addEventListener("submit", function (e) {
  e.preventDefault();
  alertZone.style.display = "none";

  // if number guessed
  if (choiceInput.value == nombreMystere) {
    afficherModal(tentatives, nombreMystere);
  }
  // if number unvalid
  if (choiceInput.value != nombreMystere) {
    numberunvalid();
    info(nombreMystere);
  }
  // if limits achieved
  if (setChances <= 0) {
    afficherModalFail();
  }
  // diminution chance left
  chancesLeft();
  // reset input
  resetValue();
  // verification
  console.log(setChances);
  console.log(tentatives);
});

//------------- functions validite number
function numberunvalid() {
  alertZone.style.display = "block";
  choosedFalsevalue.textContent = choiceInput.value;
  resultFalse.style.display = "block";
}
//------------- function liaison
function chancesLeft() {
  setChances--;
  tentatives++;
  chanceLeft.textContent = setChances;
}
//------------- fonction reset value
function resetValue() {
  choiceInput.value = "";
}
// function pour informer l'utilisateur
function info(nombreMystere) {
  if (choiceInput.value > nombreMystere) {
    message.textContent =
      " le nombre que vous avez choisi est plus grand que le nombre à deviner.";
  } else if (choiceInput.value < nombreMystere) {
    message.textContent =
      " le nombre que vous avez choisi est plus petit que le nombre à deviner.";
  }
}
// Fonction pour rafraîchir la page
function rafraichirPage() {
  location.reload();
}
