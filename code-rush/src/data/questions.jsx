// src/data/questions.js

const questions = {
  beginner: [
    {
      id: 1,
      snippet: "console.log(___)", // missing part
      choices: ["'Hello World'", "print('Hello World')", "System.out.println('Hello World')"],
      correct: "'Hello World'"
    },
    {
      id: 2,
      snippet: "let sum = 2 + ___",
      choices: ["2", "two", "'2'"],
      correct: "2"
    }
  ],
  intermediate: [
    {
      id: 3,
      snippet: "Fill in the blank: let x = [1,2,3]; console.log(x.___);",
      correct: "length"
    }
  ],
  pro: [
    {
      id: 4,
      snippet: `Write a function that squares a number:\n\nfunction square(n) { ___ }`,
      correctKeyword: "return n * n"
    }
  ]
};

export default questions;
