//------------- déclaration de variables
const Form = document.getElementById("form");
const choiceInput = document.getElementById("choice");
const alertZone = document.getElementById("alertZone");
const choosedvalue = document.getElementById("choosedvalue");
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

// Fonction pour afficher le modal avec un message dynamique
function afficherModal(tentatives, nombreMystere) {
  // Modifier le contenu dynamique
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = `Bravo ! Tu as trouvé le nombre ${nombreMystere} en ${
    tentatives + 1
  } tentatives.`;

  // Activer le modal avec Bootstrap
  const modal = new bootstrap.Modal(document.getElementById("successModal"));
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
// function reinitialiser
// Fonction pour rafraîchir la page
function rafraichirPage() {
  location.reload();
}
