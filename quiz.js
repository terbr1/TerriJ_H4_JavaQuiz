var questionEl = document.getElementById("question");
var choicesEl = document.getElementsByClassName("choice-text");

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
        answer: 2

    },
    {
        question: "What is question 2?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 1

    },
    {
        question: "What is question 3?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 3

    },
    {
        question: "What is question 4?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 1

    },
    {
        question: "What is question 5?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 4

    },
    {
        question: "What is question 6?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 2

    },
    {
        question: "What is question 7?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 3

    },
    {
        question: "What is question 8?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 4

    },
    {
        question: "What is question 9?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 1

    },
    {
        question: "What is question 10?",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D",
        answer: 2

    },
];

var maxQuestions = 10;

// Start Game 
function startGame(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}


function getNewQuestion() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

};
startGame();



















/*function startgame() {
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

function getNewQuestion() {
    var questioninterval = setInterval(() => {
        questionEl.textContent = availableQuestions[questions];
        currentQuestion++;
        question.innerText = currentQuestion.question;

        if (currentQuestion===questions.length){
              console.log("it worked"); 


    }
})
};

  /*  //questionEl = availableQuestions[questions];
    //currentQuestion++; //increment to one
    //question.innerText = currentQuestion.question;
    //if (currentQuestion===questions.length){
      //  console.log("it worked") */
