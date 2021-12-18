// kick off
var buttonEl = document.querySelector("#start-button");
// first button
var buttonfirstQuestionEl = document.querySelector("#first-question-button");
// second button
var buttonSecondQuestionEl = document.querySelector("#second-question-button");
// third button
var buttonThirdQuestionEl = document.querySelector("#third-question-button");
// forth button
var buttonForthQuestion = document.querySelector("#forth-question-button");
// fifth button
var buttonFifthQuestion = document.querySelector("#fifth-question-button");
// sixth button
var buttonsixthQuestion = document.querySelector("#six-question-button");
// seventh button
var buttonseventhQuestion = document.querySelector("#seventh-question-button");
// eigth button
var buttoneigthQuestion = document.querySelector("#eigth-question-button");
// highscore opener
var highScoreslinkEL = document.querySelector("#highscore-link");
// highscore exit button
var highScoreExitButtonEL = document.querySelector("#highScoreBackButton");
// highscore clear button
var highScoreClearButtonEL = document.querySelector("#highScoreClearButton");
// timer and score
var scoreEL = document.querySelector("#score-total");
var totalScoreEl = document.querySelector("#total-score");
var timerEl = document.querySelector("#time-left");
var endTimeEl = document.querySelector("#end-time");
// set variables
var score = 0;
var questionsLeft = 10;
var timer = 60;
var totalScore;
var pause = false;
var playerName;
var highScores = [];
var ul = document.getElementById("highscore-list-child");
var li = document.createElement("li");
// Initals
var initalsButton = document.querySelector("#initals-button");
console.log(pause)

// removes intro text
function removeIntro(){
    document.getElementById('quiz-overview').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
}
// displays input form
function inputForm(){
    document.getElementById('initals-form').style.display = 'block';
}

function clearHighScore(){
    ul.innerHTML = "";
}


function getInputFromForm(){
    var playerScore = document.getElementById("score-input").value;
    highScores.push(playerScore, totalScore);
    playerScore += " " + totalScore;
    console.log(highScores)
    var ul = document.getElementById("highscore-list-child");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(playerScore));
    ul.appendChild(li);
}

function stopCountdown(){
    clearInterval(countdown);
}

//starts timer
function countdown(){
    timer = 60;
    var timeDecay = setInterval(function (){
        if (timer > 0){
            timerEl.textContent = timer;
            timer--;
            timerEl.textContent = timer + " seconds ";
        }
        else {
            timerEl.textContent = "0";
            clearInterval(timeDecay)
        }
    }, 1000);
    
}

// kicks off first question
function firstQuestion(event){
    event.preventDefault();
    document.getElementById('question-1').style.display = 'block';
}
// kicks off second question
function secondQuestion(event){
    event.preventDefault();
    document.getElementById('question-1').style.display = 'none';
    document.getElementById('question-2').style.display = 'block';
}
// kicks off third question
function thirdQuestion(event){
    event.preventDefault();
    document.getElementById('question-2').style.display = 'none';
    document.getElementById('question-3').style.display = 'block';
}
// kicks off forth question
function forthQuestion(event){
    event.preventDefault();
    document.getElementById('question-3').style.display = 'none';
    document.getElementById('question-4').style.display = 'block';
}
// kicks off fifth question
function fifthQuestion(event){
    event.preventDefault();
    document.getElementById('question-4').style.display = 'none';
    document.getElementById('question-5').style.display = 'block';
}
//kicks of sixth question
function sixthQuestion(event){
    event.preventDefault();
    document.getElementById('question-5').style.display = 'none';
    document.getElementById('question-6').style.display = 'block';
}
//kicks of seventh question
function seventhQuestion(event){
    event.preventDefault();
    document.getElementById('question-6').style.display = 'none';
    document.getElementById('question-7').style.display = 'block';
}
//kicks of eigth question
function eigthQuestion(event){
    event.preventDefault();
    document.getElementById('question-7').style.display = 'none';
    document.getElementById('question-8').style.display = 'block';
}

// Score
function scoreTotal(){
    document.getElementById('question-8').style.display = 'none';
    document.getElementById('score-total').style.display = 'block';
    document.getElementById('initals-button').style.display = 'flex';
    document.getElementById('initals-button').style.width = 'fit-content'
    document.getElementById('incorrect-answer').style.display = 'none';
    document.getElementById('correct-answer').style.display = 'none';
    totalScore = timer + score;
    document.getElementById('time-left').style.display = 'none';
    document.getElementById('end-time').style.display = 'block';
    endTimeEl.textContent = timer;
    scoreEL.textContent = ("Score from correct answers " + score + " Score from time remaining " + timer + " Total score = " + totalScore + "   " );
    return
}
// Store Highscore
function storeHighscore(){
    timer = 0;
    score = 0;
    // for (i=0; i<highScores.lenght; i++){
    //     if (totalScore > i); 
    // }
    document.getElementById('end-time').style.display = 'none';
    document.getElementById('initals-form').style.display = 'none';
    document.getElementById('score-total').style.display = 'none';
    document.getElementById('initals-button').style.display = 'none';
    document.getElementById('time-left').style.display = 'block';
    document.getElementById('quiz-overview').style.display = 'block';
    document.getElementById('start-button').style.display = 'block';
    getInputFromForm();
    console.log(highScores)
}

// opens high score div
function highScoresDiv(){
    timer = 60;
    document.getElementById('question-1').style.display = 'none';
    document.getElementById('question-2').style.display = 'none';
    document.getElementById('question-3').style.display = 'none';
    document.getElementById('question-4').style.display = 'none';
    document.getElementById('question-5').style.display = 'none';
    document.getElementById('question-6').style.display = 'none';
    document.getElementById('question-7').style.display = 'none';
    document.getElementById('question-8').style.display = 'none';
    document.getElementById('question-1').style.display = 'none';
    document.getElementById('time-left').style.display = 'none';
    document.getElementById('quiz-overview').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('incorrect-answer').style.display = 'none';
    document.getElementById('correct-answer').style.display = 'none';
    document.getElementById('highScore-list-container').style.display = 'block';
    document.getElementById('highscore-timer').style.display = 'block';
}

// exits high score and returns to home screen
function highscoreExit (){
    document.getElementById('quiz-overview').style.display = 'block';
    document.getElementById('start-button').style.display = 'block';
    document.getElementById('highScore-list-container').style.display = 'none';
    document.getElementById('highscore-timer').style.display = 'none';
    document.getElementById('time-left').style.display = 'block';
}


//submitted answers for each question
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
    console.log(timer);
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
    console.log(timer);
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

function sixthQuestionAnswer(){
    console.log(timer);
    console.log(questionsLeft);
    if (document.getElementById('6-correct').checked){
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

function seventhQuestionAnswer(){
    
    console.log(questionsLeft);
    console.log(timer);
    if (document.getElementById('7-correct').checked){
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

function eigthQuestionAnswer(){
    questionsLeft = questionsLeft - 10;
    console.log(timer);
    if (document.getElementById('8-correct').checked){
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

// function noQuestionsRemain(){
//     if ()
// }



// Start
buttonEl.addEventListener("click", firstQuestion);
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", removeIntro);


// First
buttonfirstQuestionEl.addEventListener("click", firstQuestionAnswer);
buttonfirstQuestionEl.addEventListener("click", secondQuestion);


// Second
buttonSecondQuestionEl.addEventListener("click", secondQuestionAnswer);
buttonSecondQuestionEl.addEventListener("click", thirdQuestion);

// third
buttonThirdQuestionEl.addEventListener("click", thirdQuestionAnswer);
buttonThirdQuestionEl.addEventListener("click", forthQuestion);

// forth
buttonForthQuestion.addEventListener("click", forthQuestionAnswer);
buttonForthQuestion.addEventListener("click", fifthQuestion);

// fifth
buttonFifthQuestion.addEventListener("click", fifthQuestionAnswer);
buttonFifthQuestion.addEventListener("click", sixthQuestion);

// sixth
buttonsixthQuestion.addEventListener("click", sixthQuestionAnswer);
buttonsixthQuestion.addEventListener("click", seventhQuestion);

//seventh
buttonseventhQuestion.addEventListener("click", seventhQuestionAnswer);
buttonseventhQuestion.addEventListener("click", eigthQuestion);

//eigth
buttoneigthQuestion.addEventListener("click", eigthQuestionAnswer);
buttoneigthQuestion.addEventListener("click", scoreTotal);
buttoneigthQuestion.addEventListener("click", inputForm);

//initials
initalsButton.addEventListener("click", storeHighscore);

//highscore
highScoreslinkEL.addEventListener("click", highScoresDiv);
highScoreExitButtonEL.addEventListener("click", highscoreExit);
highScoreClearButtonEL.addEventListener("click", clearHighScore)