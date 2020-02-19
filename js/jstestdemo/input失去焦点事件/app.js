const inputkeyups = document.querySelectorAll('.input');
loadEventListeners();
function loadEventListeners() {
  console.log(inputkeyups);
  for (const item of inputkeyups) {
    item.addEventListener('blur', trimBlank);
  }
}
function trimBlank(e) {
  console.log(e);
  let inputvalue = e.target.value;
  console.log(inputvalue);
  e.target.value = inputvalue.trim();
}
