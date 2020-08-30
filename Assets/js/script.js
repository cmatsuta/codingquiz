// variables
var msgDiv = document.querySelector("#msg");
var index = 0;
var correct = 0;
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const counter = document.getElementById("counter");
const end = document.getElementById("end");
let quizTime;
let count = 40;
const questionTime = 40;
start.addEventListener("click", startQuiz);

//variable for score
var score = 0;
var userInput = document.querySelector("#userinitial").value;
var saveBtn = document.querySelector("#saveBtn");
localStorage.setItem("initial", userInput);

function saveScore() {
    document.getElementById("saveBtn").innerHTML = localStorage.getItem("userInput")
}


// const myScore = JSON.parse(localStorage.getItem("correct")) || [];

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    quizTime = setInterval(renderCounter, 1000); // 1000ms = 1s
}

function init(x) {
    return document.getElementById(x);
}

// render question function
function renderQuestion() {
    test = init("test");
    if (index >= questions.length) {
        test.innerHTML = "<h2>Your score is " + correct + " of " + questions.length + " .</h2>";
        init("renderQuestions").innerHTML = "Game Over!";
        function renderSubmit() {
        var initial = localStorage.getItem(userInput);
        var correct = localStorage.getItem(correct); 
        };

        index = 0;
        correct = 0;
        return false;
    }

    init("renderQuestions").innerHTML = "Question " + (index + 1) + " of " + questions.length;
    question = questions[index][0];
    choiceA = questions[index][1];
    choiceB = questions[index][2];
    choiceC = questions[index][3];
    choiceD = questions[index][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + choiceA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + choiceB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + choiceC + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> " + choiceD + "<br>";
    test.innerHTML += "<button onclick='checkAnswer()'style = 'background-color: #279; color: #fff;'>Submit Answer</button>";
}

// rendr counter function
function renderCounter() {
    counter.innerHTML = count + " sec left";
    count--;
    if (count <= -1) {
        clearInterval(quizTime);
        // count = 0;
    }
}

// calling the function to display message when answer
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

// check answer from the multiple choice questions
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }

    if (choice == questions[index][5]) {
        correct++;
        score += correct;
        displayMessage("correct", "Correct!");
    } else {
        displayMessage("wrong", "Wrong Answer!");
        count -= 5;
    }

    index++;
    renderQuestion();
}


window.addEventListener("load", renderQuestion, false);
