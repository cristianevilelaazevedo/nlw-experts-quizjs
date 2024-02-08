//Variável para gerar as perguntas e suas alternativas e respostas. É um array.
const perguntas = [
  {
    pergunta: "Qual é a função principal do JavaScript?",
    respostas: [
      "Estilizar páginas da web",
      "Adicionar interatividade e dinamismo às páginas da web",
      "Definir a estrutura de uma página da web",
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes não é um tipo de dado em JavaScript?",
    respostas: [
      "String",
      "Float",
      "Boolean",
    ],
    correta: 1
  },
  {
    pergunta: "O que significa 'DOM' em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Model",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um 'loop' em JavaScript?",
    respostas: [
      "Uma função de repetição",
      "Uma declaração de variável",
      "Um tipo de operador",
    ],
    correta: 0
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "let myVariable = 10;",
      "variable myVariable = 10;",
      "var myVariable = 10;",
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um laço de repetição",
      "Um tipo de dado",
      "Um bloco de código reutilizável",
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes métodos é usado para adicionar um elemento HTML a um documento em JavaScript?",
    respostas: [
      "appendChild()",
      "insertElement()",
      "addElement()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
    respostas: [
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
      "// Este é um comentário",
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes operadores é usado para comparar igualdade em valor e tipo em JavaScript?",
    respostas: [
      "==",
      "=",
      "===",
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'querySelector()' faz em JavaScript?",
    respostas: [
      "Seleciona o primeiro elemento de uma página da web que corresponde a um seletor específico",
      "Adiciona um elemento HTML a um documento",
      "Atualiza o valor de um elemento HTML",
    ],
    correta: 0
  },
];

//Variáveis que selecionam as tags contidas no doc HTML
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

//faz a div acertos mostrar o número de acertos que o usuário fez
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
//mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true) //cloneNode serve para clonar os elementos do template
  quizItem.querySelector('h3').textContent = item.pergunta //comando que mostra a pergunta na tela 

  //loop das alternativas das perguntas 
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) //possibilita selecionar as alternativas das perguntas
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //Função que permite contar os acertos dos usuários
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove() //remoção do span

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

