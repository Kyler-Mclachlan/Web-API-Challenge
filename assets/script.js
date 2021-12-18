// kick off
var buttonEl = document.querySelector("#start-button");
//first button
var buttonfirstQuestionEl = document.querySelector("#first-question-button");
//second button
var buttonSecondQuestionEl = document.querySelector("#second-question-button");
//third button
var buttonThirdQuestionEl = document.querySelector("#third-question-button");
// forth button
var buttonForthQuestion = document.querySelector("#forth-question-button");
//fifth button
var buttonFifthQuestion = document.querySelector("fifth-question-button");

// timer and score
var timerEl = document.querySelector("#time-left");
var score = 0;
var questionsLeft = 10;

// removes intro text
function removeIntro(){
    document.getElementById('quiz-overview').style.display = 'none';
    buttonEl.remove();
}

//starts timer
var timer = 60;

function countdown(){
    var timeDecay = setInterval(function (){
        if (timer > 1){
            timerEl.textContent = timer;
            timer--;
            timerEl.textContent = timer + " seconds ";
        } 
        else {
            timerEl.textContent = "0";
            clearInterval(countdown);
        }
    }, 1000);
}

// kicks off first question
function firstQuestion(event){
    event.preventDefault();
    document.getElementById('question-1').style.display = 'block';
}
// kicks off second question
function secondQuestion(){
    document.getElementById('question-1').style.display = 'none';
    document.getElementById('question-2').style.display = 'block';
}
// kicks off third question
function thirdQuestion(){
    document.getElementById('question-2').style.display = 'none';
    document.getElementById('question-3').style.display = 'block';
}
// kicks off forth question
function forthQuestion(){
    document.getElementById('question-3').style.display = 'none';
    document.getElementById('question-4').style.display = 'block';
}
// kicks off fifth question
function fifthQuestion(){
    document.getElementById('question-4').style.display = 'none';
    document.getElementById('question-5').style.display = 'block';
}

function firstQuestionAnswer(){
    if (document.getElementById('1-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        timer = timer - 10;
        return
    }
}

function secondQuestionAnswer(){
    if (document.getElementById('2-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        
        return
    }
}

function thirdQuestionAnswer(){
    // questionsLeft = questionsLeft - 10;
    console.log(questionsLeft);
    if (document.getElementById('3-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        console.log(score);
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function forthQuestionAnswer(){
    
    console.log(questionsLeft);
    if (document.getElementById('4-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        console.log(score);
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function fifthQuestionAnswer(){
    
    console.log(questionsLeft);
    if (document.getElementById('5-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        console.log(score);
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}


//Start
buttonEl.addEventListener("click", firstQuestion);
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", removeIntro);


//First
buttonfirstQuestionEl.addEventListener("click", firstQuestionAnswer);
buttonfirstQuestionEl.addEventListener("click", secondQuestion);


// Second
buttonSecondQuestionEl.addEventListener("click", secondQuestionAnswer);
buttonSecondQuestionEl.addEventListener("click", thirdQuestion);

//third
buttonThirdQuestionEl.addEventListener("click", thirdQuestionAnswer);
buttonThirdQuestionEl.addEventListener("click", forthQuestion);

// forth
buttonForthQuestion.addEventListener("click", forthQuestionAnswer);
buttonForthQuestion.addEventListener("click", fifthQuestion);

//fifth
