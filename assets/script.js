// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var startBtn = document.getElementById('start');
var introContainer = document.getElementById('intro');
var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answerList = document.getElementById('answer-list');


var interval; //undefined variable for timer setInterval
var timeLeft = 75;
var questionNumber = 0;

var questions = [
    {
        question: 'Which one of these is NOT a variable type in Javascript?',
        answers: ['integer', 'float', 'string', 'method'],
        correct: '3'
    }, {
        question: 'String variable are usually surrounded by which special character?',
        answers: ['quotes', 'parenthesis', 'carats', 'square brackets'],
        correct: '0'
    }
]

function timer() {
    interval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
    }, 1000);
}

function populateQuestions() {
    questionEl.textContent = questions[questionNumber].question;
    for (let i = 0; i < questions[questionNumber].answers.length; i++) {
        var li = document.createElement('li');
        answerList.appendChild(li);
        var answerBtn = document.createElement('button');
        answerBtn.id = i;
        answerBtn.className = 'btn btn-primary m-1';
        answerBtn.textContent = questions[questionNumber].answers[i];
        li.appendChild(answerBtn);
    }
    questionNumber++;
}

//if a user selects the wrong answer, remove time from the timer variable
//if the user selects the correct answer, change the page elements to the new question in the questions array
//if the timer reaches zero or all questions are answered:
    //clearInterval on the timer variable
    //go to the highscores.html page and let the user fill in their highscore, stored locally.

startBtn.addEventListener('click', function() {
    introContainer.classList.add('d-none');
    timerEl.textContent = timeLeft; // just so time immediately shows upon pressing start button
    timer();
    populateQuestions();
});

