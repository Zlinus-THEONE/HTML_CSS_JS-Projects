let count = document.getElementById("count-text");
let info = document.getElementById("info-text");

let number = 0;

let buttonsTable = document.querySelectorAll(".button");

buttonsTable.forEach((button) => {
  button.onclick = function () {
    if (Number(button.value) == 0) {
      number = 0;
    } else if (button.value == "x2") {
      number *= 2;
    } else if (button.value == "d2") {
      number /= 2;
    } else if (button.value == "^2") {
      number **= 2;
    } else if (button.value == "random") {
      number = Math.floor(Math.random() * 10000) + 1;
    } else if (button.value == "abs") {
      number = Math.abs(number);
    } else if (button.value == "pi") {
      number = number / Math.PI;
    } else {
      number = number + Number(button.value);
    }

    count.textContent = number;

    if (number % 2 == 0) {
      info.textContent = number + " is EVEN";
    } else {
      info.textContent = number + " is ODD";
    }
  };
});
