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
