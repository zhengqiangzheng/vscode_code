var electron = require('electron');
var BrowserWindow = electron.remote.BrowserWindow;
var newwin = null;
window.onload = () => {
  var btn = document.querySelector('#btn');
  btn.onclick = () => {
    console.log(111);
    newwin = new BrowserWindow({
      width: 500,
      height: 600,
    });
    newwin.loadFile('newwin.html');
    newwin.on('close', () => {
      newwin = null;
    });
  };
};
