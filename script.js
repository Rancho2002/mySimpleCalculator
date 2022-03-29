function setValue(value) {
  document.querySelector("#inp").value += value;
}
function allClear() {
  document.querySelector("#inp").value = "";
}

function calculate() {
  let val = document.querySelector("#inp").value;
  let preAns = eval(val);
  // let preAns = "hello guys";
  document.querySelector("#inp").value = preAns;
  if (preAns == undefined) {
    document.querySelector("#inp").value = "Enter valid digit";
  }
}

function root() {
  let val = document.querySelector("#inp").value;
  document.querySelector("#inp").value = Math.pow(val, 0.5);
}
function percent() {
  let val = document.querySelector("#inp").value;
  document.querySelector("#inp").value = val / 100;
}

function backspace() {
  let val = document.querySelector("#inp").value;
  document.querySelector("#inp").value = val.slice(0, val.length - 1);
}
