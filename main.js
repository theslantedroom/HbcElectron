const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    title: "HBC Boxing",
    minHeight: 800,
    minWidth: 800,
    width: 1920,
    height: 1080,
  });

  win.loadURL("https://hbcboxing.online/");
};

// Quit the app when all windows are closed (Windows & Linux)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Open a window if none are open (macOS)
app.whenReady().then(() => {
  createWindow();

  // Open a window if none are open (macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
