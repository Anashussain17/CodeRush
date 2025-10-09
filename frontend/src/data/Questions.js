
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
    question: "Write a function `isEven(n)` that returns true if n is even.",
    funcName: "isEven",
    testcases: [
      { args: [2], expected: true },
      { args: [5], expected: false }
    ]
  },
  {
    id: 2,
    question: "Write a function `square(n)` that returns the square of a number.",
    funcName: "square",
    testcases: [
      { args: [3], expected: 9 },
      { args: [-4], expected: 16 }
    ]
  },
  {
    id: 3,
    question: "Write a function `firstChar(str)` that returns the first character of a string.",
    funcName: "firstChar",
    testcases: [
      { args: ["hello"], expected: "h" },
      { args: ["world"], expected: "w" }
    ]
  },
  {
    id: 4,
    question: "Write a function `lastChar(str)` that returns the last character of a string.",
    funcName: "lastChar",
    testcases: [
      { args: ["hello"], expected: "o" },
      { args: ["cat"], expected: "t" }
    ]
  },
  {
    id: 5,
    question: "Write a function `doubleArray(arr)` that doubles each element in an array.",
    funcName: "doubleArray",
    testcases: [
      { args: [[1, 2, 3]], expected: [2, 4, 6] },
      { args: [[5]], expected: [10] }
    ]
  },
  {
    id: 6,
    question: "Write a function `add(a, b)` that returns the sum of two numbers.",
    funcName: "add",
    testcases: [
      { args: [2, 3], expected: 5 },
      { args: [10, -5], expected: 5 }
    ]
  },
  {
    id: 7,
    question: "Write a function `toUpper(str)` that converts a string to uppercase.",
    funcName: "toUpper",
    testcases: [
      { args: ["hi"], expected: "HI" },
      { args: ["java"], expected: "JAVA" }
    ]
  },
  {
    id: 8,
    question: "Write a function `toLower(str)` that converts a string to lowercase.",
    funcName: "toLower",
    testcases: [
      { args: ["Hi"], expected: "hi" },
      { args: ["JAVASCRIPT"], expected: "javascript" }
    ]
  },
  {
    id: 9,
    question: "Write a function `arrayLength(arr)` that returns the length of an array.",
    funcName: "arrayLength",
    testcases: [
      { args: [[1, 2, 3]], expected: 3 },
      { args: [[]], expected: 0 }
    ]
  },
  {
    id: 10,
    question: "Write a function `greet(name)` that returns 'Hello, name!'.",
    funcName: "greet",
    testcases: [
      { args: ["Anas"], expected: "Hello, Anas!" },
      { args: ["JS"], expected: "Hello, JS!" }
    ]
  }
],

};

export default questions;
