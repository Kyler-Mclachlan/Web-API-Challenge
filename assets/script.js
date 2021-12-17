var buttonEl = document.querySelector("#start-button");
var timerEl = document.querySelector("#time-left");

function countdown(){
    var timer = 120;
    
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

buttonEl.addEventListener("click", countdown);