const questionText = document.getElementById('question-text');
const btn1 = document.getElementById('Btn1');
const btn2 = document.getElementById('Btn2');

btn1.addEventListener('click', () => askNextQuestion('Male'));
btn2.addEventListener('click', () => askNextQuestion('Female'));

function askNextQuestion(gender) {
    questionText.innerHTML = "What color is their hair?";
    btn1.textContent = "Brown";
    btn2.textContent = "Blonde";

    btn1.removeEventListener('click', () => askNextQuestion('Male'));
    btn2.removeEventListener('click', () => askNextQuestion('Female'));

    btn1.addEventListener('click', removeButton);
    btn2.addEventListener('click', removeButton);
    
    // if (gender == 'Male') {
    //     fetch('/CelebrityController/getCelebritiesByGenderMale')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });
    // } else if (gender == 'Female') {
    //     fetch('/CelebrityController/getCelebritiesByGenderFemale')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });
    // }

    function removeButton() {

        questionText.innerHTML = "Your Celebrity is: Josh Hutcherson";

        var button1 = document.getElementById("Btn1");
        var button2 = document.getElementById("Btn2");
        var parentElement1 = button1.parentElement;
        var parentElement2 = button2.parentElement;
        parentElement1.removeChild(button1);
        parentElement2.removeChild(button2);

        // Get the div element by its ID
        var divElement = document.getElementById("imgDiv");

        // Create an img element
        var imgElement = document.createElement("img");

        // Set the src attribute to the URL of the image file
        imgElement.src = "JoshHutcherson.jpeg"; 
        imgElement.width = 300; // Set the width of the image (in pixels)
        imgElement.height = 200; // Set the height of the image (in pixels)

        // Append the img element as a child to the div element
        divElement.appendChild(imgElement);
    }
}