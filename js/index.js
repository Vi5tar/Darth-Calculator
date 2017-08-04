var display = "";
var equation = [];
var initialDisplay = 0;
var runningTotal = 0;
var pressedDigit = "";

$(document).ready(function() {
  document.getElementById("display").innerHTML = initialDisplay;
});

function ac() {
  equation = [];
  document.getElementById("display").innerHTML = initialDisplay;
}

function ce() {
  equation.pop();
  if (equation.length == 0) {
    document.getElementById("display").innerHTML = initialDisplay;
  } else {
    document.getElementById("display").innerHTML = equation.join("");
  }

}

function divide() {
  if (
    equation[equation.length - 1] != "+" &&
    equation[equation.length - 1] != "-" &&
    equation[equation.length - 1] != "x" &&
    equation[equation.length - 1] != "/"
  ) {
    equation.push("/");
    document.getElementById("display").innerHTML = equation.join("");
  }
}

function multiply() {
  if (
    equation[equation.length - 1] != "+" &&
    equation[equation.length - 1] != "-" &&
    equation[equation.length - 1] != "x" &&
    equation[equation.length - 1] != "/"
  ) {
    equation.push("x");
    document.getElementById("display").innerHTML = equation.join("");
  }
}

function seven() {
  pressedDigit = 7;
  replaceOrAmend();
}

function eight() {
  pressedDigit = 8;
  replaceOrAmend();
}

function nine() {
  pressedDigit = 9;
  replaceOrAmend();
}

function minus() {
  if (
    equation[equation.length - 1] != "+" &&
    equation[equation.length - 1] != "-" &&
    equation[equation.length - 1] != "x" &&
    equation[equation.length - 1] != "/"
  ) {
    equation.push("-");
    document.getElementById("display").innerHTML = equation.join("");
  }
}

function four() {
  pressedDigit = 4;
  replaceOrAmend();
}

function five() {
  pressedDigit = 5;
  replaceOrAmend();
}

function six() {
  pressedDigit = 6;
  replaceOrAmend();
}

function plus() {
  if (
    equation[equation.length - 1] != "+" &&
    equation[equation.length - 1] != "-" &&
    equation[equation.length - 1] != "x" &&
    equation[equation.length - 1] != "/"
  ) {
    equation.push("+");
    document.getElementById("display").innerHTML = equation.join("");
  }
}

function one() {
  pressedDigit = 1;
  replaceOrAmend();
}

function two() {
  pressedDigit = 2;
  replaceOrAmend();
}

function three() {
  pressedDigit = 3;
  replaceOrAmend();
}

function zero() {
  pressedDigit = 0;
  replaceOrAmend();
}

function dot() {
  var operatorIndex = 0;
  var dotArray = [];

  for (var n = equation.length - 1; n >= 0; n--) {
    if (
      equation[n] == "+" ||
      equation[n] == "-" ||
      equation[n] == "x" ||
      equation[n] == "/"
    ) {
      operatorIndex = n;
    }
  }

  dotArray = equation.slice(operatorIndex);

  if (dotArray.every(dotSearch) === true) {
    equation.push(".");
    document.getElementById("display").innerHTML = equation.join("");
  }
}

function compute() {
  var numArray = [];
  var finalEquation = [];
  var operator = "";

  if (equation.length == 0) {
    finalEquation.push(0);
  }

  if (equation.length == 1 && equation[0] == ".") {
    finalEquation.push(0);
  }

  if (equation.length == 1 &&
    (equation[0] == "+" ||
      equation[0] == "-" ||
      equation[0] == "x" ||
      equation[0] == "/")) {
    equation[0] = 0;
  }

  for (var i = 0; i < equation.length; i++) {
    if ((equation[i] != "+" &&
        equation[i] != "-" &&
        equation[i] != "x" &&
        equation[i] != "/") ||
      equation[i] == ".") {
      numArray.push(equation[i]);
    } else if (equation[0] == "+" ||
      equation[0] == "-" ||
      equation[0] == "x" ||
      equation[0] == "/") {
      finalEquation.push(0);
      finalEquation.push(equation[i]);
    } else {
      finalEquation.push(parseFloat(numArray.join(""), 10));
      numArray = [];
      finalEquation.push(equation[i]);
    }
  }

  finalEquation.push(parseFloat(numArray.join(""), 10));
  numArray = [];
  equation = [];

  for (var k = 0; k < finalEquation.length; k++) {
    if (k === 0) {
      runningTotal = finalEquation[k];
    } else if (
      finalEquation[k] == "+" ||
      finalEquation[k] == "-" ||
      finalEquation[k] == "x" ||
      finalEquation[k] == "/"
    ) {
      operator = finalEquation[k];
    } else {
      switch (operator) {
        case "+":
          runningTotal += finalEquation[k];
          break;
        case "-":
          runningTotal -= finalEquation[k];
          break;
        case "x":
          runningTotal *= finalEquation[k];
          break;
        case "/":
          runningTotal /= finalEquation[k];
          break;
      }
    }
  }
  document.getElementById("display").innerHTML = runningTotal;
  equation.push(runningTotal);
}

function dotSearch(element) {
  return element != ".";
}

function replaceOrAmend() {
  if (equation.length == 1 && equation[0] == runningTotal) {
    equation[0] = pressedDigit;
    document.getElementById("display").innerHTML = equation.join("");
  } else {
    equation.push(pressedDigit);
    document.getElementById("display").innerHTML = equation.join("");
  }
}
