const databaseQuestions = [
  {
    question: "O que é um banco de dados?",
    options: ["Uma coleção de dados relacionados", "Uma linguagem de programação", "Um aplicativo de software", "Nenhuma das anteriores"],
    answer: 0,
  },
  {
    question: "O que é SQL?",
    options: ["Uma linguagem de programação", "Uma linguagem de marcação", "Uma linguagem de consulta", "Nenhuma das anteriores"],
    answer: 2,
  },
  {
    question: "O que é uma chave primária em um banco de dados?",
    options: ["Um identificador único para um registro", "Uma forma de classificar registros", "Uma forma de filtrar registros", "Nenhuma das anteriores"],
    answer: 0,
  },
];
  
  function generateDatabaseQuestions() {
    let score = 0;
    for (let i = 0; i < databaseQuestions.length; i++) {
      const question = databaseQuestions[i];
      const answer = prompt(question.question);
      if (answer === question.options[question.answer]) {
        score++;
      }
    }
    return score;
  }