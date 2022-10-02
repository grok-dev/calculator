function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, operator, y) {
  x = Number(x);
  y = Number(y);

  if (operator === "+") return add(x, y);
  if (operator === "-") return subtract(x, y);
  if (operator === "*") return multiply(x, y);
  if (operator === "/") return divide(x, y);
}

const display = document.querySelector(".display");
let displayValue = "";

function updateDisplay(n = "") {
  displayValue += n;
  display.innerHTML = displayValue;
}

function resetDisplay() {
  displayValue = "";
  display.innerHTML = 0;
}

document.getElementById("clear").onclick = () => {
  firstNum = "";
  operation = "";
  secondNum = "";
  resetDisplay();
};

// Number Population

document.getElementById("1").onclick = () => {
  updateDisplay(1);
};
document.getElementById("2").onclick = () => {
  updateDisplay(2);
};
document.getElementById("3").onclick = () => {
  updateDisplay(3);
};
document.getElementById("4").onclick = () => {
  updateDisplay(4);
};
document.getElementById("5").onclick = () => {
  updateDisplay(5);
};
document.getElementById("6").onclick = () => {
  updateDisplay(6);
};
document.getElementById("7").onclick = () => {
  updateDisplay(7);
};
document.getElementById("8").onclick = () => {
  updateDisplay(8);
};
document.getElementById("9").onclick = () => {
  updateDisplay(9);
};
document.getElementById("0").onclick = () => {
  updateDisplay(0);
};

//

document.getElementById("addition").onclick = () => {
  firstNum = displayValue;
  operation = "+";

  resetDisplay();

  console.log(firstNum);
  console.log(operation);
};

document.getElementById("subtraction").onclick = () => {
  firstNum = displayValue;
  operation = "-";

  resetDisplay();

  console.log(firstNum);
  console.log(operation);
};

document.getElementById("multiplication").onclick = () => {
  firstNum = displayValue;
  operation = "*";

  resetDisplay();

  console.log(firstNum);
  console.log(operation);
};

document.getElementById("division").onclick = () => {
  firstNum = displayValue;
  operation = "/";

  resetDisplay();

  console.log(firstNum);
  console.log(operation);
};

//

document.getElementById("equals").onclick = () => {
  secondNum = displayValue;
  console.log(secondNum);

  if (operation == "/" && secondNum == 0) {
    return alert("You can't divide by zero, silly.");
  }

  displayValue = operate(firstNum, operation, secondNum);
  updateDisplay();
};
