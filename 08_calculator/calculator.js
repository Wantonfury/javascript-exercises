const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(f) {
  if (f <= 1) return 1;
  
  let total = 2;
	for (let i = 3; i <= f; ++i)
    total = total * i;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
