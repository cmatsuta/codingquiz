var msgDiv = document.querySelector("#msg");
var index = 0;
var correct = 0;
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const counter = document.getElementById("counter");
let quizTime;
let count = 60;
const questionTime = 60;
start.addEventListener("click",startQuiz);
var username = document.querySelector("#name");
var saveBtn = document.querySelector("#save");
var finalScore = document.querySelector("#finalScore");
var lastScore = localStorage.getItem("#lastScore");

var highScore = JSON.parse(localStorage.getItem("highScore")) || [];


// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    quizTime = setInterval(renderCounter,1000); // 1000ms = 1s
}

function init(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = init("test");
    if(index >= questions.length){
        test.innerHTML = "<h2>Your score is "+correct+" of "+questions.length+" .</h2>";
        init("renderQuestions").innerHTML = "All Done!";
        index = 0;
        correct = 0;
        return false;
    }

    init("renderQuestions").innerHTML = "Question "+(index+1)+" of "+questions.length;
    question = questions[index][0];
    choiceA = questions[index][1];
    choiceB = questions[index][2];
    choiceC = questions[index][3];
    choiceD = questions[index][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+choiceD+"<br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function renderCounter(){
        counter.innerHTML = count + " sec left";
        count--;
        if(count <= -1){
        clearInterval(quizTime);
        // count = 0;
        }
}

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[index][5]){
        correct++;
        displayMessage("correct", "Correct!");
    }else{
        displayMessage("wrong", "Wrong Answer!");
        count -= 5;
    }
    index++;
    renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
