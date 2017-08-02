var display = "";
var equation = [];
var initialDisplay = 0;

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
  equation.push(7);
  document.getElementById("display").innerHTML = equation.join("");
}

function eight() {
  equation.push(8);
  document.getElementById("display").innerHTML = equation.join("");
}

function nine() {
  equation.push(9);
  document.getElementById("display").innerHTML = equation.join("");
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
  equation.push(4);
  document.getElementById("display").innerHTML = equation.join("");
}

function five() {
  equation.push(5);
  document.getElementById("display").innerHTML = equation.join("");
}

function six() {
  equation.push(6);
  document.getElementById("display").innerHTML = equation.join("");
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
  equation.push(1);
  document.getElementById("display").innerHTML = equation.join("");
}

function two() {
  equation.push(2);
  document.getElementById("display").innerHTML = equation.join("");
}

function three() {
  equation.push(3);
  document.getElementById("display").innerHTML = equation.join("");
}

function zero() {
  equation.push(0);
  document.getElementById("display").innerHTML = equation.join("");
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
  var runningTotal = 0;
  var operator = "";
  console.log(equation);

  if (equation.length == 0) {
    finalEquation.push(0);
  }

  for (var i = 0; i < equation.length; i++) {
    if ((equation[i] != "+" &&
    equation[i] != "-" &&
    equation[i] != "x" &&
    equation[i] != "/") ||
    equation[i] == ".") {
    numArray.push(equation[i]);
    } else if (equation[0] == "+" ||
      equation[i] == "-" ||
      equation[i] == "x" ||
      equation[i] == "/") {
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
  console.log(finalEquation);

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
  //console.log(equation);
}

function dotSearch(element) {
  return element != ".";
}

function equationLog() {
  console.log(equation);
}
