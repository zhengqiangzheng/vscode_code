var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: { nodeIntegration: true }, //加上这句话才可以 使用 页面中才可以使用node
  });
  require('./main/menu.js');
  mainWindow.loadFile('opennewwin.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
