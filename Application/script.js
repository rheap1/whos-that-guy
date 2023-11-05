const questionText = document.getElementById('question-text');
const maleBtn = document.getElementById('maleBtn');
const femaleBtn = document.getElementById('femaleBtn');

maleBtn.addEventListener('click', () => askNextQuestion('male'));
femaleBtn.addEventListener('click', () => askNextQuestion('female'));

function askNextQuestion(gender) {
    // Implement logic to ask more questions based on gender and other factors.
    // Update questionText.innerHTML and handle user responses accordingly.
}