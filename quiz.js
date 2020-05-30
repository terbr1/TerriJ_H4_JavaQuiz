var questionEl = document.getElementById("question");
var choicesEl = Array.from(document.getElementsByClassName("choice-text"));
var timerEl = document.getElementById("timer");
//console.log(choices);

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
  {
    question: "What is the file extension for javascrip?",
    choice1: ".html",
    choice2: ".js",
    choice3: ".css",
    choice4: ".xlsx",
    answer: 2,
  },
  {
    question: "What function allows you to print defined variables or messages?",
    choice1: "Console Log",
    choice2: "type",
    choice3: "C",
    choice4: "D",
    answer: 1,
  },
  {
    question: "Which line of code links a javascript file to the html?",
    choice1: "<a class='btn' href='quiz.html'>Start</a>",
    choice2: "<link rel='stylesheet' href='style.css' />",
    choice3: "<script src='quiz.js'></script>",
    choice4: "return window.location.assign('score.html');",
    answer: 3,
  },
  {
    question: "Which is a fundamental Object?",
    choice1: "Function",
    choice2: "parseInt()",
    choice3: "SyntaxError",
    choice4: "Math",
    answer: 1,
  },
  {
    question: "Javascript can be described as...",
    choice1: "No Bueno",
    choice2: "something I want to do everyday",
    choice3: "a sister who is annoying",
    choice4: "difficult but necessary",
    answer: 4,
  },
  ];

var startingTime = 200
var totalTime = startingTime *60


// Start Game
function startGame() {
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
}
//get question
function getNewQuestion() {
  if (availableQuestions.length === 0) {
    localStorage.setItem("mostRecentScore",score);
    //score page
    return window.location.assign("score.html");
  }
  questionCounter++;
  var timeEl = setInterval
   (function() {
     totalTime--;
     timeEl.textContent = totalTime;
     
     if(totalTime === 0){
       return window.location.assign("score.html") 
      }
     
   }, 1000);
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choicesEl.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

choicesEl.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    
    getNewQuestion();
  });
});


startGame();
