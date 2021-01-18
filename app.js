const questions = [
  {
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: [
      { text: "msg('Hello World')", correct: false },
      { text: "msgBox('Hello World');", correct: false },
      { text: "alertBox('Hello World');", correct: false },
      { text: "alert('Hello World');", correct: true },
    ],
  },
  {
    question: "2. Inside which HTML element do you put the JavaScript?",
    choices: [
      { text: "<javascript>", correct: false },
      { text: "<link>", correct: false },
      { text: "<script>", correct: true },
      { text: "<style>", correct: false },
    ],
  },
  {
    question: "3. What is the correct location to insert a Javascript tag?",
    choices: [
      { text: "The <head> section", correct: false },
      { text: "The <body> section", correct: false },
      { text: "The <style> section", correct: false },
      { text: "Both the <head> and <body> section will work", correct: true },
    ],
  },
  {
    question:
      "4. What is the correct syntax for referring to an external script called 'app.js'?",
    choices: [
      { text: "<script href='app.js'>", correct: false },
      { text: "<script src='app.js'>", correct: true },
      { text: "<script link='app.js'>", correct: false },
      { text: "<script name='app.js'>", correct: false },
    ],
  },
  {
    question: "5. How do you call a function named 'setInterval'?",
    choices: [
      { text: "setInterval()", correct: true },
      { text: "call setInterval()", correct: false },
      { text: "call function setInterval()", correct: false },
      { text: "run setInterval()", correct: false },
    ],
  },
  {
    question: "6. How do you write an 'if' statement in javascript?",
    choices: [
      { text: "if i = 5", correct: false },
      { text: "if i === 5", correct: false },
      { text: "if (i == 5)", correct: true },
      { text: "if i = 5 then", correct: false },
    ],
  },
  {
    question: "7. What does CSS stand for?",
    choices: [
      { text: "Cascading Style Sheet", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
      { text: "Condensed Style Sheets", correct: false },
    ],
  },
  {
    question: "8. Which is the correct CSS syntax?",
    choices: [
      { text: "body:color=black;", correct: false },
      { text: "{body:color=black;}", correct: false },
      { text: "{body;color:black}", correct: false },
      { text: "body{color:black;}", correct: true },
    ],
  },
  {
    question: "9. How do you insert a comment in a CSS file?",
    choices: [
      { text: "// this is a comment //", correct: false },
      { text: "// this is a comment", correct: false },
      { text: "/* this is a comment */", correct: true },
      { text: "'this is a comment", correct: false },
    ],
  },
  {
    question: "10. Which property is used to change the background color?",
    choices: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bgColor", correct: false },
      { text: "set-background", correct: false },
    ],
  },
  {
    question: "11. Which property is used to change the text size?",
    choices: [
      { text: "font-style", correct: false },
      { text: "text-style", correct: false },
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
    ],
  },
  {
    question: "12. How do you select an element with an id of 'demo'?",
    choices: [
      { text: "demo", correct: false },
      { text: "*demo", correct: false },
      { text: ".demo", correct: false },
      { text: "#demo", correct: true },
    ],
  },
  {
    question: "13. What is the correct HTML element for the largest heading?",
    choices: [
      { text: "<h1>", correct: true },
      { text: "<heading>", correct: false },
      { text: "<h6>", correct: false },
      { text: "<headXL>", correct: false },
    ],
  },
  {
    question: "14. How can you open a link in a new tab?",
    choices: [
      { text: "<a href='url' new>", correct: false },
      { text: "<a href='url' target='new'>", correct: false },
      { text: "<a href='url' target='_blank'>", correct: true },
      { text: "<a href='url' newTarget>", correct: false },
    ],
  },
  {
    question:
      "15. Which HTML attribute specifies an alternate text for an image, if the image cannot be display?",
    choices: [
      { text: "description=''", correct: false },
      { text: "alt=''", correct: true },
      { text: "src=''", correct: false },
      { text: "title=''", correct: false },
    ],
  },
];

//Selectors

const beginBtn = document.querySelector("#beginBtn");
const nextBtn = document.querySelector("#next-btn");
const quizSection = document.querySelector(".quiz-section");
let currentQuestionIndex;
const questionElement = document.querySelector(".question-message");
const answerButtonElement = document.querySelector(".question-options");

//Event Listeners

beginBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

//Functions

function startQuiz() {
  quizSection.style.visibility = "visible";
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.classList.add("btn");
    if (choice.correct) {
      button.dataset.correct = choice.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}
function resetState() {
  nextBtn.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  nextBtn.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
