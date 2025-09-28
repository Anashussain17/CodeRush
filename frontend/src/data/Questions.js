
const questions = {
  beginner: [
 {
    id: 1,
    code: "What will be the output of: console.log(2 + '2');",
    options: ["4", "'22'", "NaN", "undefined"],
    answer: "'22'",
  },
  {
    id: 2,
    code: "Which of these is a falsy value in JavaScript?",
    options: ["'false'", "0", "[]", "'0'"],
    answer: "0",
  },
  {
    id: 3,
    code: "What is the output of: console.log(typeof NaN);",
    options: ["NaN", "undefined", "object", "number"],
    answer: "number",
  },
  {
    id: 4,
    code: "Which operator checks both value and type?",
    options: ["==", "===", "!=", "!=="],
    answer: "===",
  },
  {
    id: 5,
    code: "What will be logged: console.log(Boolean(''));",
    options: ["true", "false", "undefined", "error"],
    answer: "false",
  },
  {
    id: 6,
    code: "What does 'use strict' do in JavaScript?",
    options: [
      "Enforces stricter parsing and error handling",
      "Allows unsafe code execution",
      "Automatically optimizes code",
      "Adds security to variables"
    ],
    answer: "Enforces stricter parsing and error handling",
  },
  {
    id: 7,
    code: "What is the default value of an uninitialized variable?",
    options: ["null", "undefined", "0", "false"],
    answer: "undefined",
  },
  {
    id: 8,
    code: "Which of the following is NOT a valid JavaScript variable name?",
    options: ["_value", "$count", "2ndValue", "userName"],
    answer: "2ndValue",
  },
  {
    id: 9,
    code: "What will be the output: console.log([] == false);",
    options: ["true", "false", "undefined", "error"],
    answer: "true",
  },
  {
    id: 10,
    code: "What will happen: console.log(0.1 + 0.2 === 0.3);",
    options: ["true", "false", "NaN", "error"],
    answer: "false",
  },
  ],

  intermediate: [
    {
      id: 1,
      code: `console.log(typeof NaN); // fill in the output`,
      answer: "number"
    },
    {
      id: 2,
      code: `
function test() {
  var a = 10;
  if (true) {
    let a = 20;
    console.log(a); // fill in
  }
}
test();`,
      answer: "20"
    },
    {
      id: 3,
      code: `
console.log([1, 2, 3] + [4, 5]); // fill in the output
`,
      answer: "1,2,34,5"
    },
    {
      id: 4,
      code: `
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj).length); // fill in
`,
      answer: "2"
    },
    {
      id: 5,
      code: `
const arr = [1, 2, 3];
console.log(arr.map(x => x * 2)); // fill in
`,
      answer: "2,4,6"
    },
    {
      id: 6,
      code: `
let a = [1,2,3];
let b = a;
b.push(4);
console.log(a); // fill in
`,
      answer: "1,2,3,4"
    },
    {
      id: 7,
      code: `
console.log(0.1 + 0.2 === 0.3); // fill in true/false
`,
      answer: "false"
    },
    {
      id: 8,
      code: `
(async function() {
  return 42;
})(); // fill in the return type
`,
      answer: "Promise"
    },
    {
      id: 9,
      code: `
let a;
console.log(a ?? "default"); // fill in
`,
      answer: "default"
    },
    {
      id: 10,
      code: `
console.log([..."hello"].length); // fill in
`,
      answer: "5"
    }
  ],

  pro: [
      {
      id: 1,
      code: "Write a function `isEven(n)` that returns true if n is even.",
      testcases: [
        { input: 2, output: true },
        { input: 5, output: false }
      ]
    },
    {
      id: 2,
      code: "Write a function `square(n)` that returns the square of a number.",
      testcases: [
        { input: 3, output: 9 },
        { input: -4, output: 16 }
      ]
    },
    {
      id: 3,
      code: "Write a function `firstChar(str)` that returns the first character of a string.",
      testcases: [
        { input: "hello", output: "h" },
        { input: "world", output: "w" }
      ]
    },
    {
      id: 4,
      question: "Write a function `lastChar(str)` that returns the last character of a string.",
      testcases: [
        { input: "hello", output: "o" },
        { input: "cat", output: "t" }
      ]
    },
    {
      id: 5,
      code: "Write a function `doubleArray(arr)` that doubles each element in an array.",
      testcases: [
        { input: [1, 2, 3], output: [2, 4, 6] },
        { input: [5], output: [10] }
      ]
    },
    {
      id: 6,
      code: "Write a function `add(a, b)` that returns the sum of two numbers.",
      testcases: [
        { input: [2, 3], output: 5 },
        { input: [10, -5], output: 5 }
      ]
    },
    {
      id: 7,
      code: "Write a function `toUpper(str)` that converts a string to uppercase.",
      testcases: [
        { input: "hi", output: "HI" },
        { input: "java", output: "JAVA" }
      ]
    },
    {
      id: 8,
      code: "Write a function `toLower(str)` that converts a string to lowercase.",
      testcases: [
        { input: "Hi", output: "hi" },
        { input: "JAVASCRIPT", output: "javascript" }
      ]
    },
    {
      id: 9,
      code: "Write a function `arrayLength(arr)` that returns the length of an array.",
      testcases: [
        { input: [1, 2, 3], output: 3 },
        { input: [], output: 0 }
      ]
    },
    {
      id: 10,
      code: "Write a function `greet(name)` that returns 'Hello, name!'.",
      testcases: [
        { input: "Anas", output: "Hello, Anas!" },
        { input: "JS", output: "Hello, JS!" }
      ]
    }
  ],
};

export default questions;
