const { app, BrowserWindow } = require("electron");

function ElectronMainMethod() {
    const { screen } = require("electron");
    const display = screen.getPrimaryDisplay();
    const screenWidth = display.workAreaSize.width;
    const screenHeight = display.workAreaSize.height;

    const launchWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: screenWidth,
        height: screenHeight,
        //titleBarStyle: "hiddenInset", // Oculta la barra pero deja los botones de minimizar y cerrar
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    launchWindow.loadURL("http://localhost:8000");
}

app.whenReady().then(ElectronMainMethod);