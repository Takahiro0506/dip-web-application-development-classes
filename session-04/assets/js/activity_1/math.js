export const add = function (a, b) {
  return a + b;
};

export const subtract = (a, b) => a - b;

// multiply
export const multiply = function (a, b){

  return a * b;
};


// division
export const divide = (a, b) => a / b;


// divide with ternary
export const dividetenary = (a, b) =>
  b !== 0 ? a / b : "Cannot divide by zero";

