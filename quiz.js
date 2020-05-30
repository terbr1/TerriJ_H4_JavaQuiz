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
    question: "What is question 1?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answer: 2,
  },
  {
    question: "What is question 2?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answer: 1,
  },
  {
    question: "What is question 3?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answer: 3,
  },
  {
    question: "What is question 4?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answer: 1,
  },
  {
    question: "What is question 5?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answer: 4,
  },
  ];

var startingTime = 2
var totalTime = startingTime *60

/*function setTimer() {
    // Create the countdown timer.
   var timerInterval = setInterval
   (function() {
     totalTime--;
     timeEl.textContent = secondsLeft;
     
     if(secondsLeft === 0){
       return window.location.assign("index.html")
    getNewQuestion();  
      }
     
   }, 1000);
  }*/

// Start Game
function startGame() {
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length === 0) {
    return window.location.assign("index.html");
  }
  questionCounter++;
  var timerInterval = setInterval
   (function() {
     totalTime--;
     timeEl.textContent = totalTime;
     
     if(totalTime === 0){
       return window.location.assign("index.html") 
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
