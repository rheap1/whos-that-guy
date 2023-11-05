const questionText = document.getElementById('question-text');
const maleBtn = document.getElementById('maleBtn');
const femaleBtn = document.getElementById('femaleBtn');

maleBtn.addEventListener('click', () => askNextQuestion('Male'));
femaleBtn.addEventListener('click', () => askNextQuestion('Female'));

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

}