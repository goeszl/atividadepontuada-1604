const oopQuestions = [
  {
    question: "O que é encapsulamento na programação orientada a objetos?",
    options: ["Esconder dados", "Herança", "Polimorfismo", "Nenhuma das anteriores"],
    answer: 0,
  },
  {
    question: "O que é herança na programação orientada a objetos?",
    options: ["Uma maneira de criar novas classes usando classes que já foram definidas", "Uma maneira de criar novos objetos usando objetos que já foram criados", "Uma maneira de criar novas funções usando funções que já foram definidas", "Nenhuma das anteriores"],
    answer: 0,
  },
  {
    question: "O que é polimorfismo na programação orientada a objetos?",
    options: ["A capacidade de um objeto assumir muitas formas", "A capacidade de um objeto assumir apenas uma forma", "A capacidade de um objeto não assumir nenhuma forma", "Nenhuma das anteriores"],
    answer: 0,
  },
];
  
  function generateOOPQuestions() {
    let score = 0;
    for (let i = 0; i < oopQuestions.length; i++) {
      const question = oopQuestions[i];
      const answer = prompt(question.question);
      if (answer === question.options[question.answer]) {
        score++;
      }
    }
    return score;
  }