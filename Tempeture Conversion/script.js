let input = document.getElementById("temperature-input");
let result = document.getElementById("result-h2");
let symbol1 = document.getElementById("symbol1-h2");
let symbol2 = document.getElementById("symbol2-h2");

let Type_temp1 = document.getElementById("Type-of-Temperatures1");
let Type_temp2 = document.getElementById("Type-of-Temperatures2");

let selections = document.querySelectorAll(".Types-of-Temps");

Type_temp1.value = "C";
Type_temp2.value = "F";
input.value = "0";

let Old_temp1 = "C";
let Old_temp2 = "F";

let The_answer = 0;

selections.forEach((select) => {
  select.addEventListener("change", function (event) {
    if (Type_temp1.value === Type_temp2.value) {
      if (select.value === Old_temp1) {
        Type_temp1.value = Old_temp2;
      } else if (select.value === Old_temp2) {
        Type_temp2.value = Old_temp1;
      }
    }

    symbol1.innerText = `°${Type_temp1.value}`;
    symbol2.innerText = `°${Type_temp2.value}`;

    result.innerText = `°${Type_temp2.value}`;

    Old_temp1 = Type_temp1.value;
    Old_temp2 = Type_temp2.value;
    calculate();
  });
});

input.addEventListener("input", function () {
  calculate();
});

function calculate() {
  result.innerText = "";

  /*---------------- Celsius to Fahrenheit */
  if (Type_temp1.value == "C" && Type_temp2.value == "F") {
    The_answer = input.value * (9 / 5) + 32;
  } else if (Type_temp1.value == "F" && Type_temp2.value == "C") {
    The_answer = (input.value - 32) * (5 / 9);
  }
  /*---------------- Celsius to Kelvin */
  if (Type_temp1.value == "C" && Type_temp2.value == "K") {
    The_answer = Number(input.value) + 273.15;
  } else if (Type_temp1.value == "K" && Type_temp2.value == "C") {
    The_answer = Number(input.value) - 273.15;
  }

  /*---------------- Fahrenheit to Kelvin */
  if (Type_temp1.value == "F" && Type_temp2.value == "K") {
    The_answer = (input.value - 32) * (5 / 9) + 273.15;
  } else if (Type_temp1.value == "K" && Type_temp2.value == "F") {
    The_answer = (input.value - 273.15) * (9 / 5) + 32;
  }

  result.innerText = Number(The_answer.toFixed(3));
}
