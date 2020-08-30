# 04 Web APIs: Code Quiz

This application is built to play a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

## Code Quiz
A player can start quiz by clicking `Start Quiz` button. 
There are 4 questions to answer within 40 seconds. 
When a player answers a question incorrectly,
time is subtracted by 5 seconds from the clock.
When all questions are answered or the timer reaches 0*, the game is supposed to be over.
A player can save his/her initial at the end of the quiz**.

## Screenshot
![Quiz start](/Assets/img/start_screen.png)
![Generate password](/Assets/img/question_screen.png)
![Select criteria](/Assets/img/end_screen.png)

## Current Issue
Quiz can be answered even if the timer reaches 0.
Form to input initial is available anytime during the quiz and won't save the information properly. 