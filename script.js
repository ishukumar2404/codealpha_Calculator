const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Bonus: Keyboard support
document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
