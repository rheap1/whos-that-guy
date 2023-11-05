const questionText = document.getElementById('question-text');
const btn1 = document.getElementById('Btn1');
const btn2 = document.getElementById('Btn2');

btn1.addEventListener('click', () => askNextQuestion('Male'));
btn2.addEventListener('click', () => askNextQuestion('Female'));

function askNextQuestion(gender) {
    if (gender == 'Male') {
        fetch('/CelebrityController/getCelebritiesByGenderMale')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    } else if (gender == 'Female') {
        fetch('/CelebrityController/getCelebritiesByGenderFemale')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    questionText.innerHTML = "What color is their hair?"
    btn1.textContent = "Brown";
    btn2.textContent = "Blonde";
}