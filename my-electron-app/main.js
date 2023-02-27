const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({show: false, icon: __dirname + '/BukuApp.ico'});
  win.setMenu(null);
  win.setTitle("BukuApp");
  win.maximize();
  win.show();
  win.setResizable(true)
  win.loadURL('http://localhost:8080');
}

app.whenReady().then(() => {
  createWindow()
})