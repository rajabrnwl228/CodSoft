let display = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");
let buttonsArray = Array.from(buttons);
let str = "";
buttonsArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      str = str.substr(0, str.length - 1);
      display.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      display.value = str;
    } else if (e.target.innerHTML == "=") {
      str = eval(str);
      display.value = str;
    } else {
      str += event.target.innerHTML;
      display.value = str;
    }
  });
});
