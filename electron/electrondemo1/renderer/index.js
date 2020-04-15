var fs = require('fs');
window.onload = () => {
  var btn = document.querySelector('#btn');
  var text = document.querySelector('#text');
  btn.onclick = () => {
    fs.readFile('test.txt', (err, data) => {
      text.innerHTML = data;
    });
  };
};
