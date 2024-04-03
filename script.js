const quizContainer = document.getElementById("quiz-container");
const validateBtn = document.getElementById("validate-btn");
validateBtn.style.display = "none";

const oopBtn = document.getElementById("oop-btn");
oopBtn.addEventListener("click", () => {
  setTimeout(() => quizContainer.classList.add("show"), 20);
  showQuestions(oopQuestions);
});

const databaseBtn = document.getElementById("database-btn");
databaseBtn.addEventListener("click", () => {
  setTimeout(() => quizContainer.classList.add("show"), 20);
  showQuestions(databaseQuestions);
});

const frontendBtn = document.getElementById("frontend-btn");
frontendBtn.addEventListener("click", () => {
  setTimeout(() => quizContainer.classList.add("show"), 20);
  showQuestions(frontendQuestions);
});

let score = 0;

function showQuestions(questions) {
  quizContainer.innerHTML = "";
  const selectedAnswer = new Array(questions.length).fill(-1);

  questions.forEach((question, index) => {
    const questionEl = document.createElement("h2");
    questionEl.textContent = question.question;
    quizContainer.appendChild(questionEl);

    question.options.forEach((option, optionIndex) => {
      const optionEl = document.createElement("button");
      optionEl.classList.add("option-button");
      optionEl.textContent = option;
      optionEl.value = optionIndex;

      optionEl.addEventListener("click", () => {
        selectedAnswer[index] = optionIndex;
        checkAnswer(questions, index, selectedAnswer);
        optionEl.removeEventListener("click", arguments.callee);
      });

      quizContainer.appendChild(optionEl);
    });
  });

  validateBtn.disabled = true;
}

let checkAnswerCalled = false;

function checkAnswer(questions, questionIndex, selectedAnswer) {
  if (checkAnswerCalled) return;
  checkAnswerCalled = true;

  const correctAnswer = questions[questionIndex].answer;
  const selectedOption =
    questions[questionIndex].options[selectedAnswer[questionIndex]];

  const selectedOptionButtons = document.querySelectorAll(
    `button[value="${selectedAnswer[questionIndex]}"]`
  );

  selectedOptionButtons.forEach((button) => {
    if (selectedAnswer[questionIndex] === correctAnswer) {
      console.log(`Correct answer: ${selectedOption}`);
      score++;
    } else {
      console.log(`Incorrect answer: ${selectedOption}`);
    }
  });

  if (questionIndex === questions.length - 1 && selectedAnswer[questionIndex] !== -1) {
    userScore = (score / 3); 
    validateBtn.disabled = false;
    validateBtn.style.display = "inline-block";
    validateBtn.addEventListener("click", () => {
      console.log(`Total score: ${userScore}`);
      if ((userScore) === 3) {
        window.alert(`Parabéns! você acertou todas.`);
      } else if (userScore === 0) {
        window.alert(`Tente novamente. Você não acertou nenhuma :/`);
      } else if ((userScore) >= 1 && (userScore)<= 2) {
        window.alert(`Você acertou ${userScore}!`);
      }
    });
  }

  checkAnswerCalled = false;
}