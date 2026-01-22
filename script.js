const btn = document.getElementById("btn");
const showAnswerBtn = document.getElementById("showAnswer");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let currentAnswer = ""; // stocke la réponse actuelle

const API_URL = "http://localhost:3000/api/v1/blagues/random/one";

// Fonction pour charger une blague
async function loadBlague() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    question.textContent = data.question;
    currentAnswer = data.answer;
    answer.style.display = "none"; 
    answer.textContent = ""; // vide l'ancienne réponse
    showAnswerBtn.style.display = "inline-block"; // remet le bouton à son emplacement normal
  } catch (error) {
    question.textContent = "Erreur lors du chargement";
    answer.textContent = "";
  }
}

// Quand on clique sur le bouton ↻ pour charger une nouvelle blague
btn.addEventListener("click", loadBlague);

// Quand on clique sur "Voir la réponse"
showAnswerBtn.addEventListener("click", () => {
  showAnswer.style.display = "none";
  answer.textContent = currentAnswer;
  answer.style.display = "block";

// Evenement "confettis"
showAnswerBtn.addEventListener("click", () => {
    confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 }
    });
}, { once: true }); 
});

// Charger une blague dès que la page s'ouvre
window.addEventListener("DOMContentLoaded", loadBlague);
