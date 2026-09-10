// 计算器逻辑 - 陈静 2024005
var screen = document.getElementById("screen");
var first = "";  // 第一个数
var opr = "";    // 运算符
var startNew = false;

function num(d) {
  if (startNew) {
    screen.value = d;
    startNew = false;
  } else {
    screen.value = screen.value === "0" ? d : screen.value + d;
  }
}

function op(o) {
  first = screen.value;
  opr = o;
  startNew = true;
}

function equal() {
  if (opr === "") return;
  var a = parseFloat(first);
  var b = parseFloat(screen.value);
  var r;
  switch (opr) {
    case "+": r = a + b; break;
    case "-": r = a - b; break;
    case "*": r = a * b; break;
    case "/": r = a / b; break;
  }
  screen.value = r;
  first = "";
  opr = "";
}

function clearAll() {
  screen.value = "0";
  first = "";
  opr = "";
  startNew = false;
}

function del() {
  if (startNew) return;
  screen.value = screen.value.length > 1 ? screen.value.slice(0, -1) : "0";
}
