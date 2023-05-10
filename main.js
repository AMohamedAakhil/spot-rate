const { BrowserWindow, app, ipcMain }  = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require('path');
const url = require('url');

const { exec } = require('child_process');

autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "logo.ico"),
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavascript: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js"),
        }
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }));
    
}
/*

ipcMain.on('notify', (_, message) => {
    ls = exec(String(message))

    args = String(message.toLowerCase()).split("/")
    if (args[0] == "m" || args[0] == "maersk") {
        spawn("./python/maersk.exe", [args[1], args[2]])

    } else if (args[0] == "c" || args[0] == "cma" || args[0] == "cma gcm" || args[0] == "cmagcm" || args[0] == "cma-gcm") {
        spawn("./python/cmagcm.exe", [args[1], args[2]])

    } else if (args[0] == "h" || args[0] == "happag" || args[0] == "lloyd" || args[0] == "happag lloyd" || args[0] == "happag-lloyd" || args[0] == "hl") {
        spawn("./python/happag.exe", [args[1], args[2]])

    } else {
        console.log("Invalid Keyword")
    }

})

*/


ipcMain.on('notify', (_, message) => {
    args = String(message.toLowerCase()).split("/")
    if (args[0] == "m" || args[0] == "maersk") {
        exec(String(path.join(__dirname, "..", "python", "maersk.exe") + " " + args[1] + " " + args[2]), {shell: true}, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`Number of files ${stdout}`);
    });
    } else if (args[0] == "c" || args[0] == "cma" || args[0] == "cma gcm" || args[0] == "cmagcm" || args[0] == "cma-gcm") {
        exec(String(path.join(__dirname, "..", "python", "cmagcm.exe") + " " + args[1] + " " + args[2]), {shell: true}, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`Number of files ${stdout}`);
          });     } else if (args[0] == "h" || args[0] == "happag" || args[0] == "lloyd" || args[0] == "happag lloyd" || args[0] == "happag-lloyd" || args[0] == "hl") {
            exec(String(path.join(__dirname, "..", "python", "happag.exe") + " " + args[1] + " " + args[2]), {shell: true}, (err, stdout, stderr) => {
                if (err) {
                  console.error(`exec error: ${err}`);
                  return;
                }
              
                console.log(`Number of files ${stdout}`);
              });     } else {
        console.log("Invalid Keyword")
    }
});

app.whenReady().then(createWindow)
