const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const divide = function(num1, num2) {
	return num1 / num2;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const operate = function() {
  input = document.getElementById("result").value;
  document.getElementById("result").value = eval(input);
};

val = 0
const dis = function(num) {
  document.getElementById("result").value+=num;
}

const clr = function() {
  document.getElementById("result").value = null;
}

