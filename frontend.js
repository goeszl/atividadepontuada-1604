const frontendQuestions = [
  {
    question: "O que é HTML?",
    options: ["Uma linguagem de programação", "Uma linguagem de marcação", "Uma linguagem de estilos", "Nenhuma das anteriores"],
    answer: 1,
  },
  {
    question: "O que é CSS?",
    options: ["Uma linguagem de programação", "Uma linguagem de marcação", "Uma linguagem de estilos", "Nenhuma das anteriores"],
    answer: 2,
  },
  {
    question: "O que é JavaScript?",
    options: ["Uma linguagem de programação", "Uma linguagem de marcação", "Uma linguagem de estilos", "Nenhuma das anteriores"],
    answer: 0,
  },
];
  function generateFrontendQuestions() {
    let score = 0;
    for (let i = 0; i < frontendQuestions.length; i++) {
      const question = frontendQuestions[i];
      const answer = prompt(question.question);
      if (answer === question.options[question.answer]) {
        score++;
        console.log(score)
      }
    }
    return score;
  }
