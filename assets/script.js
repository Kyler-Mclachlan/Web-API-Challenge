var buttonEl = document.querySelector("#start-button");
var buttonfirstQuestionEl = document.querySelector("#first-question-button");
var timerEl = document.querySelector("#time-left");

var selection = document.querySelector("#option");
var question = 0;
var quizBank = [
    ["What object runs code continously until an exit condition is met?", "Loop", "Array","Function","Object"],
    ["Inside which HTML element do we put JavaScript?","javascript",
    "js","scripting","script"]
    ];

function removeIntro(){
    document.getElementById('quiz-overview').style.display = 'none';
    buttonEl.remove();
}

var timer = 120;
function countdown(){

    var timeDecay = setInterval(function (){
        if (timer > 1){
            timerEl.textContent = timer;
            timer--;
        }
        else {
            timerEl.textContent = "";
            clearInterval(countdown);
        }
    }, 1000);
}

function firstQuestion(){
    document.getElementById('question-1').style.display = 'block';

}

// function displayQuestions(){
//     listContainer = document.createElement("div")
//     listElement = document.createElement("li")
//     numberOfQuestions = quizBank.length;
//     for (i=0; i < numberOfQuestions; i++) {
//         listItem = document.createElement('li');
//         listItem.innerHTML = quizBank[i];
//         listElement.appendChild(listItem);
//         listContainer.appendChild(listElement);
//         listContainer.className = "quiz";
//         console.log("test")
//         console.log(listElement)
//     }
// }

buttonEl.addEventListener("click", firstQuestion);
// buttonEl.addEventListener("click", displayQuestions);
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", removeIntro);
