var questionEl = document.getElementById("question");
var choicesEl = Array.from(document.getElementsByClassName("choice-text"));
var timerEl = document.getElementById(timer);


var currentQuestion = {};
var acceptingAnswers = true;
var availableQuestions = [];

//Questions
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

var startTime = 2
var totalTime = starttime * 60

// Start Game
function startGame() {
  availableQuestions = [...questions];
  getNewQuestion();
}

}
function getNewQuestion() {
  if (availableQuestions.length === 0) {
    return window.location.assign("index.html");
  }
  questionCounter++;

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

function setTime(){
    totalTime--;
    

startGame();
