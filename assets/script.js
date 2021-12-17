var buttonEl = document.querySelector("#start-button");
var buttonfirstQuestionEl = document.querySelector("#first-question-button");
var timerEl = document.querySelector("#time-left");
var scorce = 0;
// removes intro text
function removeIntro(){
    document.getElementById('quiz-overview').style.display = 'none';
    buttonEl.remove();
}

//starts timer
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

// kicks off first question
function firstQuestion(){
    document.getElementById('question-1').style.display = 'block';

}

function firstQuestionAnswer(){
    if (document.getElementById('1-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        score =+ 10;
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        timer = timer - 10;
        return
    }
}

buttonfirstQuestionEl.addEventListener("click", firstQuestionAnswer);
buttonEl.addEventListener("click", firstQuestion);
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", removeIntro);

