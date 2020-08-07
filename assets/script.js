// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var startBtn = document.getElementById('start');
var introContainer = document.getElementById('intro');
var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answerList = document.getElementById('answer-list');
var examContainer = document.getElementById('exam-questions');


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

//set timer on page load
timerEl.textContent = timeLeft;

function timer() {
    interval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            console.log('were out of time');
            //go to enter initials page
        }
    }, 1000);
}

function populateQuestions() {
    if (questionNumber < questions.length) {
        questionEl.textContent = questions[questionNumber].question;
        answerList.innerHTML = "";
        for (let i = 0; i < questions[questionNumber].answers.length; i++) {
            var li = document.createElement('li');
            answerList.appendChild(li);
            var answerBtn = document.createElement('button');
            answerBtn.id = i;
            answerBtn.className = 'btn btn-primary m-1';
            answerBtn.textContent = questions[questionNumber].answers[i];
            li.appendChild(answerBtn);
        }
    } else {
        console.log('out of questions');
        //go to enter initials page
    }
}

//if the timer reaches zero or all questions are answered:
    //go to the highscores.html page and let the user fill in their highscore, stored locally.

startBtn.addEventListener('click', function() {
    introContainer.classList.add('d-none');
    timerEl.textContent = timeLeft; // just so time immediately shows upon pressing start button
    timer();
    examContainer.classList.add('d-block');
    populateQuestions();
});

answerList.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
        var choice = e.target.id;
        if (choice.toString() === questions[questionNumber].correct) {
            questionNumber++;
            populateQuestions();
        } else {
            timeLeft = timeLeft - 10;
            timerEl.textContent = timeLeft;
            questionNumber++;
            populateQuestions();
        }
    }
});